export const getHeroesResponse = async (resource) => {
  const response = await fetch(resource);
  const heroes = await response.json();

  const flattenObject = (input) => {
    const roles_id = input.roles.map((role) => role.id);

    return {
      id: input.id,
      main_id: input.main_id,
      name: input.name,
      role_id: roles_id.length > 0 ? roles_id : null,
      rating_value: input.ratings.length > 0 ? input.ratings[0].value : null,
      skin_name: input.skins.length > 0 ? input.skins[0].name : null,
      skin_portrait: input.skins.length > 0 ? input.skins[0].portrait : null,
    };
  };

  const outputArray = heroes.data.map(flattenObject);
  return outputArray;
};

export const getTableResponse = async (resource) => {
  const response = await fetch(resource);
  const data = await response.json();
  return data;
};

export const getRoles = async (resource) => {
  const { data } = await getTableResponse(resource);

  const roles = data.map((role) => {
    const { icon, ...data } = role;

    return data;
  });

  return [
    {
      id: 0,
      name: "All",
    },
    ...roles,
  ];
};

export const getDataHero = async (resource) => {
  const response = await fetch(resource);
  const data = await response.json();
  return data;
};
