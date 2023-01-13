var wms_layers = [];


        var lyr_Mapa_0 = new ol.layer.Tile({
            'title': 'Mapa',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Uprawaburakaha_1 = new ol.format.GeoJSON();
var features_Uprawaburakaha_1 = format_Uprawaburakaha_1.readFeatures(json_Uprawaburakaha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uprawaburakaha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uprawaburakaha_1.addFeatures(features_Uprawaburakaha_1);
var lyr_Uprawaburakaha_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uprawaburakaha_1, 
                style: style_Uprawaburakaha_1,
                interactive: true,
    title: 'Uprawa buraka [ha]<br />\
    <img src="styles/legend/Uprawaburakaha_1_0.png" /> 0 - 72<br />\
    <img src="styles/legend/Uprawaburakaha_1_1.png" /> 72 - 267<br />\
    <img src="styles/legend/Uprawaburakaha_1_2.png" /> 267 - 620<br />\
    <img src="styles/legend/Uprawaburakaha_1_3.png" /> 620 - 1406<br />\
    <img src="styles/legend/Uprawaburakaha_1_4.png" /> 1406 - 4683<br />'
        });
var format_Uprawakukurydzyha_2 = new ol.format.GeoJSON();
var features_Uprawakukurydzyha_2 = format_Uprawakukurydzyha_2.readFeatures(json_Uprawakukurydzyha_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uprawakukurydzyha_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uprawakukurydzyha_2.addFeatures(features_Uprawakukurydzyha_2);
var lyr_Uprawakukurydzyha_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uprawakukurydzyha_2, 
                style: style_Uprawakukurydzyha_2,
                interactive: true,
    title: 'Uprawa kukurydzy [ha]<br />\
    <img src="styles/legend/Uprawakukurydzyha_2_0.png" /> 0 - 72<br />\
    <img src="styles/legend/Uprawakukurydzyha_2_1.png" /> 72 - 267<br />\
    <img src="styles/legend/Uprawakukurydzyha_2_2.png" /> 267 - 620<br />\
    <img src="styles/legend/Uprawakukurydzyha_2_3.png" /> 620 - 1406<br />\
    <img src="styles/legend/Uprawakukurydzyha_2_4.png" /> 1406 - 4683<br />'
        });
var format_Pogowiebydoszt_3 = new ol.format.GeoJSON();
var features_Pogowiebydoszt_3 = format_Pogowiebydoszt_3.readFeatures(json_Pogowiebydoszt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pogowiebydoszt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pogowiebydoszt_3.addFeatures(features_Pogowiebydoszt_3);
var lyr_Pogowiebydoszt_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pogowiebydoszt_3, 
                style: style_Pogowiebydoszt_3,
                interactive: true,
    title: 'Pogłowie bydło [szt.]<br />\
    <img src="styles/legend/Pogowiebydoszt_3_0.png" /> 0 - 10047<br />\
    <img src="styles/legend/Pogowiebydoszt_3_1.png" /> 10047 - 24622<br />\
    <img src="styles/legend/Pogowiebydoszt_3_2.png" /> 24622 - 48049<br />\
    <img src="styles/legend/Pogowiebydoszt_3_3.png" /> 48049 - 97161<br />\
    <img src="styles/legend/Pogowiebydoszt_3_4.png" /> 97161 - 148214<br />'
        });
var format_Pogowiedrbszt_4 = new ol.format.GeoJSON();
var features_Pogowiedrbszt_4 = format_Pogowiedrbszt_4.readFeatures(json_Pogowiedrbszt_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pogowiedrbszt_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pogowiedrbszt_4.addFeatures(features_Pogowiedrbszt_4);
var lyr_Pogowiedrbszt_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pogowiedrbszt_4, 
                style: style_Pogowiedrbszt_4,
                interactive: true,
    title: 'Pogłowie drób [szt.]<br />\
    <img src="styles/legend/Pogowiedrbszt_4_0.png" /> 0 - 51722<br />\
    <img src="styles/legend/Pogowiedrbszt_4_1.png" /> 51722 - 139437<br />\
    <img src="styles/legend/Pogowiedrbszt_4_2.png" /> 139437 - 343416<br />\
    <img src="styles/legend/Pogowiedrbszt_4_3.png" /> 343416 - 769405<br />\
    <img src="styles/legend/Pogowiedrbszt_4_4.png" /> 769405 - 11160288<br />'
        });
var format_Gorzelniel100rok_5 = new ol.format.GeoJSON();
var features_Gorzelniel100rok_5 = format_Gorzelniel100rok_5.readFeatures(json_Gorzelniel100rok_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorzelniel100rok_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorzelniel100rok_5.addFeatures(features_Gorzelniel100rok_5);
var lyr_Gorzelniel100rok_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gorzelniel100rok_5, 
                style: style_Gorzelniel100rok_5,
                interactive: true,
    title: 'Gorzelnie [l 100%/rok]<br />\
    <img src="styles/legend/Gorzelniel100rok_5_0.png" /> 0 - 250000<br />\
    <img src="styles/legend/Gorzelniel100rok_5_1.png" /> 250000 - 700000<br />\
    <img src="styles/legend/Gorzelniel100rok_5_2.png" /> 700000 - 1200000<br />\
    <img src="styles/legend/Gorzelniel100rok_5_3.png" /> 1200000 - 2530000<br />\
    <img src="styles/legend/Gorzelniel100rok_5_4.png" /> 2530000 - 275000000<br />'
        });
var format_Sieenergetyczna110kV_6 = new ol.format.GeoJSON();
var features_Sieenergetyczna110kV_6 = format_Sieenergetyczna110kV_6.readFeatures(json_Sieenergetyczna110kV_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sieenergetyczna110kV_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sieenergetyczna110kV_6.addFeatures(features_Sieenergetyczna110kV_6);
var lyr_Sieenergetyczna110kV_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sieenergetyczna110kV_6, 
                style: style_Sieenergetyczna110kV_6,
                interactive: true,
                title: 'Sieć energetyczna [110 kV]'
            });
var format_BiogazownieMW_7 = new ol.format.GeoJSON();
var features_BiogazownieMW_7 = format_BiogazownieMW_7.readFeatures(json_BiogazownieMW_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiogazownieMW_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BiogazownieMW_7.addFeatures(features_BiogazownieMW_7);
var lyr_BiogazownieMW_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiogazownieMW_7, 
                style: style_BiogazownieMW_7,
                interactive: true,
    title: 'Biogazownie [MW]<br />\
    <img src="styles/legend/BiogazownieMW_7_0.png" /> 0 - 0,5<br />\
    <img src="styles/legend/BiogazownieMW_7_1.png" /> 0,5 - 1<br />\
    <img src="styles/legend/BiogazownieMW_7_2.png" /> 1 - 1,5<br />\
    <img src="styles/legend/BiogazownieMW_7_3.png" /> 1,5 - 2<br />\
    <img src="styles/legend/BiogazownieMW_7_4.png" /> 2,5 - 3,5<br />'
        });

lyr_Mapa_0.setVisible(true);lyr_Uprawaburakaha_1.setVisible(false);lyr_Uprawakukurydzyha_2.setVisible(false);lyr_Pogowiebydoszt_3.setVisible(false);lyr_Pogowiedrbszt_4.setVisible(false);lyr_Gorzelniel100rok_5.setVisible(false);lyr_Sieenergetyczna110kV_6.setVisible(false);lyr_BiogazownieMW_7.setVisible(true);
var layersList = [lyr_Mapa_0,lyr_Uprawaburakaha_1,lyr_Uprawakukurydzyha_2,lyr_Pogowiebydoszt_3,lyr_Pogowiedrbszt_4,lyr_Gorzelniel100rok_5,lyr_Sieenergetyczna110kV_6,lyr_BiogazownieMW_7];
lyr_Uprawaburakaha_1.set('fieldAliases', {'JPT_POWIER': 'JPT_POWIER', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'Pogłowie_bydło ogółem': 'Pogłowie_bydło ogółem', 'Pogłowie_drób ogółem': 'Pogłowie_drób ogółem', 'Uprawy_kukurydza (ha)': 'Uprawy_kukurydza (ha)', 'Uprawy_buraki cukrowe (ha)': 'Uprawy_buraki cukrowe (ha)', 'Uprawy_trawy i użytki zielone': 'Uprawy_trawy i użytki zielone', 'Uprawy_owoce (ha)': 'Uprawy_owoce (ha)', });
lyr_Uprawakukurydzyha_2.set('fieldAliases', {'JPT_POWIER': 'JPT_POWIER', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'Pogłowie_bydło ogółem': 'Pogłowie_bydło ogółem', 'Pogłowie_drób ogółem': 'Pogłowie_drób ogółem', 'Uprawy_kukurydza (ha)': 'Uprawy_kukurydza (ha)', 'Uprawy_buraki cukrowe (ha)': 'Uprawy_buraki cukrowe (ha)', 'Uprawy_trawy i użytki zielone': 'Uprawy_trawy i użytki zielone', 'Uprawy_owoce (ha)': 'Uprawy_owoce (ha)', });
lyr_Pogowiebydoszt_3.set('fieldAliases', {'JPT_POWIER': 'JPT_POWIER', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'Pogłowie_bydło ogółem': 'Pogłowie_bydło ogółem', 'Pogłowie_drób ogółem': 'Pogłowie_drób ogółem', });
lyr_Pogowiedrbszt_4.set('fieldAliases', {'JPT_POWIER': 'JPT_POWIER', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'Pogłowie_bydło ogółem': 'Pogłowie_bydło ogółem', 'Pogłowie_drób ogółem': 'Pogłowie_drób ogółem', 'Uprawy_kukurydza (ha)': 'Uprawy_kukurydza (ha)', 'Uprawy_buraki cukrowe (ha)': 'Uprawy_buraki cukrowe (ha)', 'Uprawy_trawy i użytki zielone': 'Uprawy_trawy i użytki zielone', 'Uprawy_owoce (ha)': 'Uprawy_owoce (ha)', });
lyr_Gorzelniel100rok_5.set('fieldAliases', {'Podmiot': 'Podmiot', 'Adres': 'Adres', 'Y': 'Y', 'X': 'X', 'Limit (l 100% alk/r)': 'Limit (l 100% alk/r)', });
lyr_Sieenergetyczna110kV_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'cables': 'cables', 'voltage': 'voltage', 'power': 'power', 'name': 'name', });
lyr_BiogazownieMW_7.set('fieldAliases', {'Nazwa podmiotu': 'Nazwa podmiotu', 'Adres': 'Adres', 'X': 'X', 'Y': 'Y', 'Moc Mwe': 'Moc Mwe', 'Moc Mwe_1': 'Moc Mwe_1', });
lyr_Uprawaburakaha_1.set('fieldImages', {'JPT_POWIER': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'Pogłowie_bydło ogółem': 'Range', 'Pogłowie_drób ogółem': 'Range', 'Uprawy_kukurydza (ha)': 'Range', 'Uprawy_buraki cukrowe (ha)': 'Range', 'Uprawy_trawy i użytki zielone': 'Range', 'Uprawy_owoce (ha)': 'Range', });
lyr_Uprawakukurydzyha_2.set('fieldImages', {'JPT_POWIER': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'Pogłowie_bydło ogółem': 'Range', 'Pogłowie_drób ogółem': 'Range', 'Uprawy_kukurydza (ha)': 'Range', 'Uprawy_buraki cukrowe (ha)': 'Range', 'Uprawy_trawy i użytki zielone': 'Range', 'Uprawy_owoce (ha)': 'Range', });
lyr_Pogowiebydoszt_3.set('fieldImages', {'JPT_POWIER': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'Pogłowie_bydło ogółem': 'Range', 'Pogłowie_drób ogółem': 'Range', });
lyr_Pogowiedrbszt_4.set('fieldImages', {'JPT_POWIER': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'Pogłowie_bydło ogółem': 'Range', 'Pogłowie_drób ogółem': 'Range', 'Uprawy_kukurydza (ha)': 'Range', 'Uprawy_buraki cukrowe (ha)': 'Range', 'Uprawy_trawy i użytki zielone': 'Range', 'Uprawy_owoce (ha)': 'Range', });
lyr_Gorzelniel100rok_5.set('fieldImages', {'Podmiot': 'TextEdit', 'Adres': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Limit (l 100% alk/r)': 'Range', });
lyr_Sieenergetyczna110kV_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'cables': 'TextEdit', 'voltage': 'TextEdit', 'power': 'TextEdit', 'name': 'TextEdit', });
lyr_BiogazownieMW_7.set('fieldImages', {'Nazwa podmiotu': 'TextEdit', 'Adres': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Moc Mwe': 'TextEdit', 'Moc Mwe_1': 'TextEdit', });
lyr_Uprawaburakaha_1.set('fieldLabels', {'JPT_POWIER': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'Pogłowie_bydło ogółem': 'no label', 'Pogłowie_drób ogółem': 'no label', 'Uprawy_kukurydza (ha)': 'no label', 'Uprawy_buraki cukrowe (ha)': 'inline label', 'Uprawy_trawy i użytki zielone': 'no label', 'Uprawy_owoce (ha)': 'no label', });
lyr_Uprawakukurydzyha_2.set('fieldLabels', {'JPT_POWIER': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'Pogłowie_bydło ogółem': 'no label', 'Pogłowie_drób ogółem': 'no label', 'Uprawy_kukurydza (ha)': 'inline label', 'Uprawy_buraki cukrowe (ha)': 'no label', 'Uprawy_trawy i użytki zielone': 'no label', 'Uprawy_owoce (ha)': 'no label', });
lyr_Pogowiebydoszt_3.set('fieldLabels', {'JPT_POWIER': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'Pogłowie_bydło ogółem': 'inline label', 'Pogłowie_drób ogółem': 'no label', });
lyr_Pogowiedrbszt_4.set('fieldLabels', {'JPT_POWIER': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'Pogłowie_bydło ogółem': 'no label', 'Pogłowie_drób ogółem': 'inline label', 'Uprawy_kukurydza (ha)': 'no label', 'Uprawy_buraki cukrowe (ha)': 'no label', 'Uprawy_trawy i użytki zielone': 'no label', 'Uprawy_owoce (ha)': 'no label', });
lyr_Gorzelniel100rok_5.set('fieldLabels', {'Podmiot': 'inline label', 'Adres': 'inline label', 'Y': 'no label', 'X': 'no label', 'Limit (l 100% alk/r)': 'inline label', });
lyr_Sieenergetyczna110kV_6.set('fieldLabels', {'full_id': 'inline label', 'osm_id': 'no label', 'cables': 'no label', 'voltage': 'inline label', 'power': 'no label', 'name': 'no label', });
lyr_BiogazownieMW_7.set('fieldLabels', {'Nazwa podmiotu': 'inline label', 'Adres': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'Moc Mwe': 'inline label', 'Moc Mwe_1': 'inline label', });
lyr_BiogazownieMW_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});