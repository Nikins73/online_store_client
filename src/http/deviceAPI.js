import { $host, $authHost } from "./index";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  console.log(type);
  return data;
};
export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");

  return data;
};
export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);

  return data;
};
export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");

  console.log(data);
  return data;
};
export const createDevice = async (device) => {
  console.log(device);
  const { data } = await $authHost.post("api/device", device);
  console.log(data);
  return data;
};
export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $host.get("api/device", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });

  return data;
};
export const fetchOneDevice = async (id) => {
  const { data } = await $host.get("api/device/" + id);

  return data;
};
