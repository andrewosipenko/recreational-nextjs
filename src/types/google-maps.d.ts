declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: HTMLElement, opts?: MapOptions);
      setZoom(zoom: number): void;
      getZoom(): number;
      fitBounds(bounds: LatLngBounds): void;
    }

    class Marker {
      constructor(opts?: MarkerOptions);
      addListener(eventName: string, handler: Function): void;
    }

    class LatLngBounds {
      constructor();
      extend(latLng: LatLng): void;
    }

    class LatLng {
      constructor(lat: number, lng: number);
    }

    class Size {
      constructor(width: number, height: number);
    }

    class Point {
      constructor(x: number, y: number);
    }

    interface MapOptions {
      center?: LatLng;
      zoom?: number;
      mapTypeId?: MapTypeId;
      styles?: MapTypeStyle[];
      mapTypeControl?: boolean;
    }

    interface MarkerOptions {
      position?: LatLng;
      map?: Map;
      title?: string;
      icon?: string | Icon;
      clickable?: boolean;
      label?: string | Label;
    }

    interface Icon {
      url?: string;
      scaledSize?: Size;
      anchor?: Point;
      path?: SymbolPath;
      scale?: number;
      fillColor?: string;
      fillOpacity?: number;
      strokeColor?: string;
      strokeWeight?: number;
    }

    interface Label {
      text: string;
      color?: string;
      fontSize?: string;
      fontWeight?: string;
    }

    interface MapTypeStyle {
      featureType?: string;
      elementType?: string;
      stylers?: Array<{ [key: string]: any }>;
    }

    enum MapTypeId {
      ROADMAP = 'roadmap',
      HYBRID = 'hybrid'
    }

    enum SymbolPath {
      CIRCLE = 0
    }

    namespace MarkerClusterer {
      class GridAlgorithm {
        constructor(options?: { maxZoom?: number; gridSize?: number });
      }
    }
  }
}

declare module '@googlemaps/markerclusterer' {
  export class MarkerClusterer {
    constructor(options: {
      map: google.maps.Map;
      markers: google.maps.Marker[];
      algorithm?: any;
      renderer?: {
        render: (params: { count: number; position: google.maps.LatLng }) => google.maps.Marker;
      };
    });
  }
}

declare module '@react-google-maps/api' {
  export interface GoogleMapProps {
    mapContainerStyle?: any;
    center?: any;
    zoom?: number;
    onLoad?: (map: google.maps.Map) => void;
    onUnmount?: () => void;
    mapTypeId?: string;
    options?: any;
  }

  export interface MarkerProps {
    position: any;
    onClick?: () => void;
    title?: string;
    clusterer?: any;
  }

  export interface InfoWindowProps {
    position: any;
    onCloseClick?: () => void;
    children?: React.ReactNode;
  }

  export const GoogleMap: React.ComponentType<GoogleMapProps>;
  export const Marker: React.ComponentType<MarkerProps>;
  export const InfoWindow: React.ComponentType<InfoWindowProps>;
  export const useJsApiLoader: (options: any) => { isLoaded: boolean };
}

export {};
