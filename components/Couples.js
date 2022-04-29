import { gql, useQuery } from "@apollo/client";

export const ALL_COUPLES_QUERY = gql`
  query ALL_COUPLES_QUERY {
    category(id: "2") {
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

export default function Couples() {
  const { data, error, loading } = useQuery(ALL_COUPLES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { data: couples } = data.category.data.attributes.restaurants;

  return (
    <div>
      {couples.map(couple => (
        <>
          <h2>{couple.attributes.name}</h2>
          {couple.attributes.image.data.map(img => (
            <img src={img.attributes.url} alt="image" />
          ))}
        </>
      ))}
    </div>
  );
}
