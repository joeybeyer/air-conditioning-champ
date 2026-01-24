// src/lib/utils/location-helpers.ts
// Helper functions for location-specific data

import { Location, LocationAddress, getLocationBySlug } from '@/lib/data/locations';
import { COMPANY } from '@/lib/data/company';

/**
 * Get phone number for a location
 * - If location has GBP with its own phone, return that
 * - If location has a parentGBP, return the parent's phone
 * - Otherwise return the main company phone
 */
export function getPhoneForLocation(location: Location): { phone: string; phoneRaw: string } {
  // If location has its own phone (GBP location)
  if (location.hasGBP && location.phone && location.phoneRaw) {
    return {
      phone: location.phone,
      phoneRaw: location.phoneRaw,
    };
  }

  // If location has a parent GBP, use the parent's phone
  if (location.parentGBP) {
    const parentLocation = getLocationBySlug(location.parentGBP);
    if (parentLocation?.phone && parentLocation?.phoneRaw) {
      return {
        phone: parentLocation.phone,
        phoneRaw: parentLocation.phoneRaw,
      };
    }
  }

  // Fall back to main company phone
  return {
    phone: COMPANY.phone,
    phoneRaw: COMPANY.phoneRaw,
  };
}

/**
 * Get address for a location (only for GBP locations)
 */
export function getAddressForLocation(location: Location): LocationAddress | null {
  if (location.hasGBP && location.address) {
    return location.address;
  }
  return null;
}

/**
 * Check if location has a Google Business Profile
 */
export function locationHasGBP(location: Location): boolean {
  return location.hasGBP === true;
}

/**
 * Get Google Maps embed URL for a location (only for GBP locations with embed)
 */
export function getGoogleMapsEmbed(location: Location): string | null {
  if (location.hasGBP && location.googleMapsEmbed) {
    return location.googleMapsEmbed;
  }
  return null;
}

/**
 * Format address for display
 */
export function formatAddress(address: LocationAddress): string {
  return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
}

/**
 * Get all locations with GBP
 */
export function getGBPLocations(): Location[] {
  // Import dynamically to avoid circular dependency
  const { LOCATIONS } = require('@/lib/data/locations');
  return LOCATIONS.filter((location: Location) => location.hasGBP === true);
}

/**
 * Get locations grouped by state
 */
export function getLocationsByState(): Record<string, Location[]> {
  const { LOCATIONS } = require('@/lib/data/locations');
  const grouped: Record<string, Location[]> = {};

  for (const location of LOCATIONS) {
    const state = location.stateFullName;
    if (!grouped[state]) {
      grouped[state] = [];
    }
    grouped[state].push(location);
  }

  return grouped;
}

/**
 * Get GBP locations grouped by state
 */
export function getGBPLocationsByState(): Record<string, Location[]> {
  const gbpLocations = getGBPLocations();
  const grouped: Record<string, Location[]> = {};

  for (const location of gbpLocations) {
    const state = location.stateFullName;
    if (!grouped[state]) {
      grouped[state] = [];
    }
    grouped[state].push(location);
  }

  return grouped;
}
