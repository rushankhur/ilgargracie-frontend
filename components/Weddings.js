import { gql, useQuery } from "@apollo/client";

export const ALL_WEDDINGS_QUERY = gql`
  query ALL_WEDDINGS_QUERY {
    category(id: "1") {
      data {
        attributes {
          restaurants {
            data {
              id
              attributes {
                name
                image {
                  data {
                    id
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function Weddings() {
  const { data, error, loading } = useQuery(ALL_WEDDINGS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { data: weddings } = data.category.data.attributes.restaurants;

  return (
    <div>
      {weddings.map(wedding => (
        <>
          <h2>{wedding.attributes.name}</h2>
          {wedding.attributes.image.data.map(img => (
            <img src={img.attributes.url} alt="image" />
          ))}
        </>
      ))}
    </div>
  );
}
