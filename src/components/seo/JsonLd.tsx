type SchemaData = Record<string, unknown> | null | undefined;

interface JsonLdProps {
  data: SchemaData | SchemaData[];
}

export function JsonLd({ data }: JsonLdProps) {
  const schemas = (Array.isArray(data) ? data : [data]).filter((s): s is Record<string, unknown> => s != null);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
