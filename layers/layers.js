var wms_layers = [];


        var lyr_Background_map_0 = new ol.layer.Tile({
            'title': 'Background_map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Bydo_Powiaty_1 = new ol.format.GeoJSON();
var features_Bydo_Powiaty_1 = format_Bydo_Powiaty_1.readFeatures(json_Bydo_Powiaty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bydo_Powiaty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bydo_Powiaty_1.addFeatures(features_Bydo_Powiaty_1);
var lyr_Bydo_Powiaty_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bydo_Powiaty_1, 
                style: style_Bydo_Powiaty_1,
                interactive: true,
    title: 'Bydło_Powiaty<br />\
    <img src="styles/legend/Bydo_Powiaty_1_0.png" /> 0 - 10047<br />\
    <img src="styles/legend/Bydo_Powiaty_1_1.png" /> 10047 - 24622<br />\
    <img src="styles/legend/Bydo_Powiaty_1_2.png" /> 24622 - 48049<br />\
    <img src="styles/legend/Bydo_Powiaty_1_3.png" /> 48049 - 97161<br />\
    <img src="styles/legend/Bydo_Powiaty_1_4.png" /> 97161 - 148214<br />'
        });
var format_Burak_Powiaty_2 = new ol.format.GeoJSON();
var features_Burak_Powiaty_2 = format_Burak_Powiaty_2.readFeatures(json_Burak_Powiaty_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Burak_Powiaty_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Burak_Powiaty_2.addFeatures(features_Burak_Powiaty_2);
var lyr_Burak_Powiaty_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Burak_Powiaty_2, 
                style: style_Burak_Powiaty_2,
                interactive: true,
    title: 'Burak_Powiaty<br />\
    <img src="styles/legend/Burak_Powiaty_2_0.png" /> 0 - 72<br />\
    <img src="styles/legend/Burak_Powiaty_2_1.png" /> 72 - 267<br />\
    <img src="styles/legend/Burak_Powiaty_2_2.png" /> 267 - 620<br />\
    <img src="styles/legend/Burak_Powiaty_2_3.png" /> 620 - 1406<br />\
    <img src="styles/legend/Burak_Powiaty_2_4.png" /> 1406 - 4683<br />'
        });
var format_Kukurydza_Powiaty_3 = new ol.format.GeoJSON();
var features_Kukurydza_Powiaty_3 = format_Kukurydza_Powiaty_3.readFeatures(json_Kukurydza_Powiaty_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kukurydza_Powiaty_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kukurydza_Powiaty_3.addFeatures(features_Kukurydza_Powiaty_3);
var lyr_Kukurydza_Powiaty_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kukurydza_Powiaty_3, 
                style: style_Kukurydza_Powiaty_3,
                interactive: true,
    title: 'Kukurydza_Powiaty<br />\
    <img src="styles/legend/Kukurydza_Powiaty_3_0.png" /> 0 - 72<br />\
    <img src="styles/legend/Kukurydza_Powiaty_3_1.png" /> 72 - 267<br />\
    <img src="styles/legend/Kukurydza_Powiaty_3_2.png" /> 267 - 620<br />\
    <img src="styles/legend/Kukurydza_Powiaty_3_3.png" /> 620 - 1406<br />\
    <img src="styles/legend/Kukurydza_Powiaty_3_4.png" /> 1406 - 4683<br />'
        });
var format_Drb_Powiaty_4 = new ol.format.GeoJSON();
var features_Drb_Powiaty_4 = format_Drb_Powiaty_4.readFeatures(json_Drb_Powiaty_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drb_Powiaty_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drb_Powiaty_4.addFeatures(features_Drb_Powiaty_4);
var lyr_Drb_Powiaty_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Drb_Powiaty_4, 
                style: style_Drb_Powiaty_4,
                interactive: true,
    title: 'Drób_Powiaty<br />\
    <img src="styles/legend/Drb_Powiaty_4_0.png" /> 0 - 51722<br />\
    <img src="styles/legend/Drb_Powiaty_4_1.png" /> 51722 - 139437<br />\
    <img src="styles/legend/Drb_Powiaty_4_2.png" /> 139437 - 343416<br />\
    <img src="styles/legend/Drb_Powiaty_4_3.png" /> 343416 - 769405<br />\
    <img src="styles/legend/Drb_Powiaty_4_4.png" /> 769405 - 11160288<br />'
        });
var format_PSE_5 = new ol.format.GeoJSON();
var features_PSE_5 = format_PSE_5.readFeatures(json_PSE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSE_5.addFeatures(features_PSE_5);
var lyr_PSE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PSE_5, 
                style: style_PSE_5,
                interactive: true,
                title: 'PSE'
            });
var format_Biogazownie_6 = new ol.format.GeoJSON();
var features_Biogazownie_6 = format_Biogazownie_6.readFeatures(json_Biogazownie_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biogazownie_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biogazownie_6.addFeatures(features_Biogazownie_6);
var lyr_Biogazownie_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Biogazownie_6, 
                style: style_Biogazownie_6,
                interactive: true,
    title: 'Biogazownie<br />\
    <img src="styles/legend/Biogazownie_6_0.png" /> 0 - 0,5<br />\
    <img src="styles/legend/Biogazownie_6_1.png" /> 0,5 - 1<br />\
    <img src="styles/legend/Biogazownie_6_2.png" /> 1 - 1,5<br />\
    <img src="styles/legend/Biogazownie_6_3.png" /> 1,5 - 2<br />\
    <img src="styles/legend/Biogazownie_6_4.png" /> 2,5 - 3,5<br />'
        });

lyr_Background_map_0.setVisible(true);lyr_Bydo_Powiaty_1.setVisible(true);lyr_Burak_Powiaty_2.setVisible(true);lyr_Kukurydza_Powiaty_3.setVisible(true);lyr_Drb_Powiaty_4.setVisible(true);lyr_PSE_5.setVisible(true);lyr_Biogazownie_6.setVisible(true);
var layersList = [lyr_Background_map_0,lyr_Bydo_Powiaty_1,lyr_Burak_Powiaty_2,lyr_Kukurydza_Powiaty_3,lyr_Drb_Powiaty_4,lyr_PSE_5,lyr_Biogazownie_6];
lyr_Bydo_Powiaty_1.set('fieldAliases', {'JPT_POWIER': 'JPT_POWIER', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'Pogłowie_bydło ogółem': 'Pogłowie_bydło ogółem', 'Pogłowie_drób ogółem': 'Pogłowie_drób ogółem', });
lyr_Burak_Powiaty_2.set('fieldAliases', {'JPT_POWIER': 'JPT_POWIER', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'Pogłowie_bydło ogółem': 'Pogłowie_bydło ogółem', 'Pogłowie_drób ogółem': 'Pogłowie_drób ogółem', 'Uprawy_kukurydza (ha)': 'Uprawy_kukurydza (ha)', 'Uprawy_buraki cukrowe (ha)': 'Uprawy_buraki cukrowe (ha)', 'Uprawy_trawy i użytki zielone': 'Uprawy_trawy i użytki zielone', 'Uprawy_owoce (ha)': 'Uprawy_owoce (ha)', });
lyr_Kukurydza_Powiaty_3.set('fieldAliases', {'JPT_POWIER': 'JPT_POWIER', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'Pogłowie_bydło ogółem': 'Pogłowie_bydło ogółem', 'Pogłowie_drób ogółem': 'Pogłowie_drób ogółem', 'Uprawy_kukurydza (ha)': 'Uprawy_kukurydza (ha)', 'Uprawy_buraki cukrowe (ha)': 'Uprawy_buraki cukrowe (ha)', 'Uprawy_trawy i użytki zielone': 'Uprawy_trawy i użytki zielone', 'Uprawy_owoce (ha)': 'Uprawy_owoce (ha)', });
lyr_Drb_Powiaty_4.set('fieldAliases', {'JPT_POWIER': 'JPT_POWIER', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'Pogłowie_bydło ogółem': 'Pogłowie_bydło ogółem', 'Pogłowie_drób ogółem': 'Pogłowie_drób ogółem', 'Uprawy_kukurydza (ha)': 'Uprawy_kukurydza (ha)', 'Uprawy_buraki cukrowe (ha)': 'Uprawy_buraki cukrowe (ha)', 'Uprawy_trawy i użytki zielone': 'Uprawy_trawy i użytki zielone', 'Uprawy_owoce (ha)': 'Uprawy_owoce (ha)', });
lyr_PSE_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'cables': 'cables', 'voltage': 'voltage', 'power': 'power', 'name': 'name', });
lyr_Biogazownie_6.set('fieldAliases', {'Nazwa podmiotu': 'Nazwa podmiotu', 'Adres': 'Adres', 'X': 'X', 'Y': 'Y', 'Moc Mwe': 'Moc Mwe', 'Moc Mwe_1': 'Moc Mwe_1', });
lyr_Bydo_Powiaty_1.set('fieldImages', {'JPT_POWIER': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'Pogłowie_bydło ogółem': 'Range', 'Pogłowie_drób ogółem': 'Range', });
lyr_Burak_Powiaty_2.set('fieldImages', {'JPT_POWIER': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'Pogłowie_bydło ogółem': 'Range', 'Pogłowie_drób ogółem': 'Range', 'Uprawy_kukurydza (ha)': 'Range', 'Uprawy_buraki cukrowe (ha)': 'Range', 'Uprawy_trawy i użytki zielone': 'Range', 'Uprawy_owoce (ha)': 'Range', });
lyr_Kukurydza_Powiaty_3.set('fieldImages', {'JPT_POWIER': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'Pogłowie_bydło ogółem': 'Range', 'Pogłowie_drób ogółem': 'Range', 'Uprawy_kukurydza (ha)': 'Range', 'Uprawy_buraki cukrowe (ha)': 'Range', 'Uprawy_trawy i użytki zielone': 'Range', 'Uprawy_owoce (ha)': 'Range', });
lyr_Drb_Powiaty_4.set('fieldImages', {'JPT_POWIER': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'Pogłowie_bydło ogółem': 'Range', 'Pogłowie_drób ogółem': 'Range', 'Uprawy_kukurydza (ha)': 'Range', 'Uprawy_buraki cukrowe (ha)': 'Range', 'Uprawy_trawy i użytki zielone': 'Range', 'Uprawy_owoce (ha)': 'Range', });
lyr_PSE_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'cables': 'TextEdit', 'voltage': 'TextEdit', 'power': 'TextEdit', 'name': 'TextEdit', });
lyr_Biogazownie_6.set('fieldImages', {'Nazwa podmiotu': 'TextEdit', 'Adres': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Moc Mwe': 'TextEdit', 'Moc Mwe_1': 'TextEdit', });
lyr_Bydo_Powiaty_1.set('fieldLabels', {'JPT_POWIER': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'Pogłowie_bydło ogółem': 'inline label', 'Pogłowie_drób ogółem': 'no label', });
lyr_Burak_Powiaty_2.set('fieldLabels', {'JPT_POWIER': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'Pogłowie_bydło ogółem': 'no label', 'Pogłowie_drób ogółem': 'no label', 'Uprawy_kukurydza (ha)': 'no label', 'Uprawy_buraki cukrowe (ha)': 'inline label', 'Uprawy_trawy i użytki zielone': 'no label', 'Uprawy_owoce (ha)': 'no label', });
lyr_Kukurydza_Powiaty_3.set('fieldLabels', {'JPT_POWIER': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'Pogłowie_bydło ogółem': 'no label', 'Pogłowie_drób ogółem': 'no label', 'Uprawy_kukurydza (ha)': 'inline label', 'Uprawy_buraki cukrowe (ha)': 'no label', 'Uprawy_trawy i użytki zielone': 'no label', 'Uprawy_owoce (ha)': 'no label', });
lyr_Drb_Powiaty_4.set('fieldLabels', {'JPT_POWIER': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'Pogłowie_bydło ogółem': 'no label', 'Pogłowie_drób ogółem': 'inline label', 'Uprawy_kukurydza (ha)': 'no label', 'Uprawy_buraki cukrowe (ha)': 'no label', 'Uprawy_trawy i użytki zielone': 'no label', 'Uprawy_owoce (ha)': 'no label', });
lyr_PSE_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'cables': 'no label', 'voltage': 'inline label', 'power': 'no label', 'name': 'no label', });
lyr_Biogazownie_6.set('fieldLabels', {'Nazwa podmiotu': 'header label', 'Adres': 'inline label', 'X': 'no label', 'Y': 'no label', 'Moc Mwe': 'no label', 'Moc Mwe_1': 'inline label', });
lyr_Biogazownie_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});