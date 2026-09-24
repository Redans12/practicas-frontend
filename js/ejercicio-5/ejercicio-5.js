const response = {
  user: { name: "Lucía", address: { city: "Vigo" } },
  settings: null,
  visits: 0,
};

const street = response.user?.address?.street;
const companyName = response.company?.name;

const country = response.user?.address?.country ?? "España";

const visitsOr = response.visits || "Sin visitas";
const visitsNullish = response.visits ?? "Sin visitas";

const { name, role = "invitado" } = response.user;

const nuevoUsuario = {
  ...response.user,
  address: { ...response.user.address, city: "Madrid" },
};

const sumar = (...numeros) => numeros.reduce((acc, n) => acc + n, 0);