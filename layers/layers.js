var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Powiaty_upr_1 = new ol.format.GeoJSON();
var features_Powiaty_upr_1 = format_Powiaty_upr_1.readFeatures(json_Powiaty_upr_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Powiaty_upr_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Powiaty_upr_1.addFeatures(features_Powiaty_upr_1);
var lyr_Powiaty_upr_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Powiaty_upr_1, 
                style: style_Powiaty_upr_1,
                interactive: true,
                title: '<img src="styles/legend/Powiaty_upr_1.png" /> Powiaty_upr'
            });

lyr_Positronretina_0.setVisible(true);lyr_Powiaty_upr_1.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_Powiaty_upr_1];
lyr_Powiaty_upr_1.set('fieldAliases', {'JPT_POWIER': 'JPT_POWIER', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', });
lyr_Powiaty_upr_1.set('fieldImages', {'JPT_POWIER': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', });
lyr_Powiaty_upr_1.set('fieldLabels', {'JPT_POWIER': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'header label', });
lyr_Powiaty_upr_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});