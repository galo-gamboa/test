// src/config/excursiones.js
export const excursiones = {
  floripa: [
    {
      id: 'catamaran',
      nombre: 'Paseo en Catamarán',
      descripcion: 'Navegá por las aguas turquesa de Florianópolis en una experiencia única.',
      imagen: '/src/assets/excursiones/floripa-catamaran.jpg',
      duracion: '4 horas',
      destacado: true,
    },
    {
      id: 'barco',
      nombre: 'Paseo en Barco',
      descripcion: 'Recorré la costa de la isla a bordo de un barco con paradas en playas paradisíacas.',
      imagen: '/src/assets/excursiones/floripa-barco.jpg',
      duracion: '5 horas',
      destacado: false,
    },
    {
      id: 'campeche',
      nombre: 'Isla de Campeche',
      descripcion: 'Visitá una de las playas más hermosas de Brasil, con aguas cristalinas y arena blanca.',
      imagen: '/src/assets/excursiones/floripa-campeche.jpg',
      duracion: 'Día completo',
      destacado: true,
    },
    {
      id: 'frances',
      nombre: 'Isla de Francés Plus',
      descripcion: 'Una experiencia completa con snorkel, playa y paisajes increíbles.',
      imagen: '/src/assets/excursiones/floripa-frances.jpg',
      duracion: '6 horas',
      destacado: false,
    },
    {
      id: 'pirata',
      nombre: 'Barco Pirata',
      descripcion: 'Una aventura divertida para toda la familia, con animación y paisajes únicos.',
      imagen: '/src/assets/excursiones/floripa-pirata.jpg',
      duracion: '4 horas',
      destacado: false,
    },
  ],
  galinhas: [
    {
      id: 'maragogi',
      nombre: 'Maragogi',
      descripcion: 'Conocé las famosas piscinas naturales de Maragogi, un paraíso caribeño en Brasil.',
      imagen: '/src/assets/excursiones/galinhas-maragogi.jpg',
      duracion: 'Día completo',
      destacado: true,
    },
    {
      id: 'carneiros',
      nombre: 'Playa de Carneiros',
      descripcion: 'Una de las playas más bellas del nordeste, con cocoteros y aguas cálidas.',
      imagen: '/src/assets/excursiones/galinhas-carneiros.jpg',
      duracion: 'Día completo',
      destacado: true,
    },
    {
      id: 'santo-aleixo',
      nombre: 'Ilha de Santo Aleixo',
      descripcion: 'Una isla paradisíaca con aguas cristalinas ideal para snorkel y relax.',
      imagen: '/src/assets/excursiones/galinhas-santo-aleixo.jpg',
      duracion: '6 horas',
      destacado: false,
    },
    {
      id: 'buggy',
      nombre: 'Paseo en Buggy',
      descripcion: 'Aventura por las playas y paisajes de Porto de Galinhas a bordo de un buggy.',
      imagen: '/src/assets/excursiones/galinhas-buggy.jpg',
      duracion: '3 horas',
      destacado: false,
    },
    {
      id: 'snorkel',
      nombre: 'Snorkel en las Piscinas Naturales',
      descripcion: 'Sumergite en las piscinas naturales y descubrí la vida marina del lugar.',
      imagen: '/src/assets/excursiones/galinhas-snorkel.jpg',
      duracion: '3 horas',
      destacado: true,
    },
  ],
};

export const getExcursiones = (sucursalId) => excursiones[sucursalId] || [];