export const mapProductImage = (image: string) => {
  const imageMap: Record<string, string> = {
    'https://www.baustoffshop.de/meeth-kunststofffenster-typ-76-3-1-flugelig-dreh-kipp-uw-0-9-weiss-n458-10001-grp.html':
      'https://www.baustoffshop.de/media/catalog/product/cache/f06299e7d0d108118744e911a06ab174/m/e/meeth_1x1_white_closed.jpg',
    'https://www.baustoffshop.de/claytec-lehm-oberputz-fein-06-trocken-25-kg.html':
      'https://www.baustoffshop.de/media/catalog/product/cache/f06299e7d0d108118744e911a06ab174/c/l/claytec_10.113_lehm-oberputz-fei-06_sack.jpg',
    'https://www.baustoffshop.de/steico-flex-036-dammplatte-1220x575-mm.html':
      'https://www.baustoffshop.de/media/catalog/product/cache/f06299e7d0d108118744e911a06ab174/s/t/steico_steico_flex_036_rgb.jpg',
    'https://www.baustoffshop.de/v-b-bodenfliese-20x20-cm-unit-one-grey-3171-ut02.html':
      'https://www.baustoffshop.de/media/catalog/product/cache/f06299e7d0d108118744e911a06ab174/v/u/vundb_3171ut02.jpg',
    'https://www.baustoffshop.de/prima-parkett-grandiosa-oak-nature-oiled-sb-2200x180x12-mm-ns-2-5-mm.html':
      'https://www.baustoffshop.de/media/catalog/product/cache/f06299e7d0d108118744e911a06ab174/p/r/prima-neu_4876997_prima_parkett_grandiosa_oak_nature_oiled_ver.jpg',
  };

  return imageMap[image] || image;
};
