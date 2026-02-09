var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SJCalderaDerrapeR27_1 = new ol.format.GeoJSON();
var features_SJCalderaDerrapeR27_1 = format_SJCalderaDerrapeR27_1.readFeatures(json_SJCalderaDerrapeR27_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SJCalderaDerrapeR27_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SJCalderaDerrapeR27_1.addFeatures(features_SJCalderaDerrapeR27_1);
var lyr_SJCalderaDerrapeR27_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SJCalderaDerrapeR27_1, 
                style: style_SJCalderaDerrapeR27_1,
                popuplayertitle: 'SJ-Caldera Derrape R.27',
                interactive: true,
    title: 'SJ-Caldera Derrape R.27<br />\
    <img src="styles/legend/SJCalderaDerrapeR27_1_0.png" /> Poco deslizante<br />\
    <img src="styles/legend/SJCalderaDerrapeR27_1_1.png" /> Deslizante<br />\
    <img src="styles/legend/SJCalderaDerrapeR27_1_2.png" /> Muy deslizante<br />' });
var format_CalderaSJDerrapeR27_2 = new ol.format.GeoJSON();
var features_CalderaSJDerrapeR27_2 = format_CalderaSJDerrapeR27_2.readFeatures(json_CalderaSJDerrapeR27_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CalderaSJDerrapeR27_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CalderaSJDerrapeR27_2.addFeatures(features_CalderaSJDerrapeR27_2);
var lyr_CalderaSJDerrapeR27_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CalderaSJDerrapeR27_2, 
                style: style_CalderaSJDerrapeR27_2,
                popuplayertitle: 'Caldera-SJ Derrape R.27',
                interactive: true,
    title: 'Caldera-SJ Derrape R.27<br />\
    <img src="styles/legend/CalderaSJDerrapeR27_2_0.png" /> Poco deslizante<br />\
    <img src="styles/legend/CalderaSJDerrapeR27_2_1.png" /> Deslizante<br />\
    <img src="styles/legend/CalderaSJDerrapeR27_2_2.png" /> Muy deslizante<br />' });
var group_ImagenesLanname = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Imagenes Lanname'});
var group_MapaCatastral = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mapa Catastral'});
var group_Cartografia5k = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Cartografia 5k'});
var group_Cartografia25k = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Cartografia 25k'});
var group_Mosaicosdehojas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mosaicos de hojas'});
var group_Ortofotos = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Ortofotos'});

lyr_googlesatellitehybrid_0.setVisible(true);lyr_SJCalderaDerrapeR27_1.setVisible(true);lyr_CalderaSJDerrapeR27_2.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,lyr_SJCalderaDerrapeR27_1,lyr_CalderaSJDerrapeR27_2];
lyr_SJCalderaDerrapeR27_1.set('fieldAliases', {'id': 'id', 'Deslizante': 'Deslizante', });
lyr_CalderaSJDerrapeR27_2.set('fieldAliases', {'id': 'id', 'Deslizante': 'Deslizante', });
lyr_SJCalderaDerrapeR27_1.set('fieldImages', {'id': 'TextEdit', 'Deslizante': 'Range', });
lyr_CalderaSJDerrapeR27_2.set('fieldImages', {'id': 'TextEdit', 'Deslizante': 'Range', });
lyr_SJCalderaDerrapeR27_1.set('fieldLabels', {'id': 'no label', 'Deslizante': 'no label', });
lyr_CalderaSJDerrapeR27_2.set('fieldLabels', {'id': 'no label', 'Deslizante': 'no label', });
lyr_CalderaSJDerrapeR27_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});