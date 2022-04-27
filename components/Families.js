import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const ALL_FAMILIES_QUERY = gql`
  query ALL_FAMILIES_QUERY {
    category(id: "3") {
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

export default function Families() {
  const { data, error, loading } = useQuery(ALL_FAMILIES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { data: families } = data.category.data.attributes.restaurants;

  return (
    <div>
      {families.map(family => (
        <>
          <h2>{family.attributes.name}</h2>
          {family.attributes.image.data.map(img => (
            <img src={img.attributes.url} alt="image" />
          ))}
        </>
      ))}
    </div>
  );
}
