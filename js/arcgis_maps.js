require([
    "esri/Map",

    "esri/views/MapView",
    "esri/views/SceneView",

    "esri/layers/FeatureLayer",
    "esri/layers/TileLayer",

    "esri/widgets/Legend",
    "esri/widgets/Expand",

    "dojo/domReady!"
], function(Map, MapView, SceneView, FeatureLayer, TileLayer, Legend, Expand) {

    // Mapa 1 ==========================================================================
    const map = new Map ({
        basemap: "topo"
    });

    const mapView = new MapView ({
        container: "map1",
        map: map
    });

    // =================================================================================


    // Mapa 2 ==========================================================================
    const map2 = new Map ({
        basemap: "dark-gray"
    });

    const mapView2 = new MapView ({
        container: "map2",
        map: map2,
        center: [-74, 3],
        scale: 50000000
    });

    // =================================================================================

    // Mapa 3 ==========================================================================

    const generationPlants = new FeatureLayer ({
        url: "http://arcgis.simec.gov.co:6080/arcgis/rest/services/UPME_EN/UPME_EN_Generaci%C3%B3n_Real/MapServer/0"
    });

    const map3 = new Map ({
        basemap: "dark-gray",
        layers: [generationPlants]
    });

    const mapView3 = new MapView ({
        container: "map3",
        map: map3,
        center: [-73.5, 4],
        scale: 20000000
    });

    // =================================================================================

    // Mapa 4 ==========================================================================

    const generationPlants2 = new FeatureLayer ({
        url: "http://arcgis.simec.gov.co:6080/arcgis/rest/services/UPME_EN/UPME_EN_Generaci%C3%B3n_Real/MapServer/0"
    });

    const basemapFirefly = new TileLayer ({
        url: "http://serviceslab.arcgisonline.com/arcgis/rest/services/Firefly_World_Imagery/MapServer"
    });

    generationPlants2.renderer = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "https://static.arcgis.com/images/Symbols/Firefly/FireflyB8.png",
            width: 16,
            height: 16
        }
    };

    const map4 = new Map ({
        layers: [basemapFirefly, generationPlants2]
    });

    const mapView4 = new MapView ({
        container: "map4",
        map: map4,
        center: [-73.5, 4],
        scale: 20000000
    });

    // =================================================================================

    // Mapa 5 ==========================================================================

    const generationPlants3 = new FeatureLayer ({
        url: "http://arcgis.simec.gov.co:6080/arcgis/rest/services/UPME_EN/UPME_EN_Generaci%C3%B3n_Real/MapServer/0"
    });

    const basemapFirefly2 = new TileLayer ({
        url: "http://serviceslab.arcgisonline.com/arcgis/rest/services/Firefly_World_Imagery/MapServer"
    });

    generationPlants3.renderer = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "https://static.arcgis.com/images/Symbols/Firefly/FireflyB8.png",
            width: 16,
            height: 16
        }
    };

    const map5 = new Map ({
        layers: [basemapFirefly2, generationPlants3]
    });

    const mapView5 = new MapView ({
        container: "map5",
        map: map4,
        center: [-73.5, 4],
        scale: 20000000
    });

    const legend = new Expand({
        content:new Legend ({
            view: mapView5,
            style: "card",
            layerInfos: [{
                title: "Plantas de Generación",
                layer: generationPlants2
            }]
        }),
        view: mapView5
    });

    mapView5.ui.add(legend, "bottom-right");


    // =================================================================================


    // Mapa 6 ==========================================================================
    const generationPlants4 = new FeatureLayer ({
        url: "http://arcgis.simec.gov.co:6080/arcgis/rest/services/UPME_EN/UPME_EN_Generaci%C3%B3n_Real/MapServer/0"
    });

    const basemapFirefly3 = new TileLayer ({
        url: "http://serviceslab.arcgisonline.com/arcgis/rest/services/Firefly_World_Imagery/MapServer"
    });

    generationPlants4.renderer = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "https://static.arcgis.com/images/Symbols/Firefly/FireflyB8.png",
            width: 16,
            height: 16
        }
    };

    const map6 = new Map ({
        layers: [basemapFirefly3, generationPlants4]
    });

    const mapView6 = new MapView ({
        container: "map6",
        map: map4,
        center: [-73.5, 4],
        scale: 20000000
    });

    const legend2 = new Expand({
        content:new Legend ({
            view: mapView6,
            style: "card",
            layerInfos: [{
                title: "Plantas de Generación",
                layer: generationPlants3
            }]
        }),
        view: mapView6
    });

    mapView6.ui.add(legend2, "bottom-right");

    // =================================================================================


    // Mapa 7 ==========================================================================

    const generationPlants5 = new FeatureLayer ({
        url: "http://arcgis.simec.gov.co:6080/arcgis/rest/services/UPME_EN/UPME_EN_Generaci%C3%B3n_Real/MapServer/0"
    });

    const basemapFirefly4 = new TileLayer ({
        url: "https://fly.maptiles.arcgis.com/arcgis/rest/services/World_Imagery_Firefly/MapServer"
    });

    generationPlants5.renderer = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "https://static.arcgis.com/images/Symbols/Firefly/FireflyB8.png",
            width: 10,
            height: 10
        }
    };

    const map7 = new Map ({
        layers: [basemapFirefly4, generationPlants5]
    });

    const mapScene = new SceneView ({
        container: "map7",
        map: map7,
        center: [-74, 3],
        scale: 500000000
    });

    const legend3 = new Expand({
        content:new Legend ({
            view: mapScene,
            style: "card",
            layerInfos: [{
                title: "Plantas de Generación",
                layer: generationPlants5
            }]
        }),
        view: mapScene
    });

    mapScene.ui.add(legend3, "bottom-right");


    // =================================================================================

});