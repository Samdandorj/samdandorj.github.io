var wms_layers = [];

var format_lake_0 = new ol.format.GeoJSON();
var features_lake_0 = format_lake_0.readFeatures(json_lake_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lake_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lake_0.addFeatures(features_lake_0);
var lyr_lake_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lake_0, 
                style: style_lake_0,
                interactive: true,
                title: '<img src="styles/legend/lake_0.png" /> lake'
            });
var format_river_1 = new ol.format.GeoJSON();
var features_river_1 = format_river_1.readFeatures(json_river_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_river_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_river_1.addFeatures(features_river_1);
var lyr_river_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_river_1, 
                style: style_river_1,
                interactive: true,
                title: '<img src="styles/legend/river_1.png" /> river'
            });
var format_csongmat_2 = new ol.format.GeoJSON();
var features_csongmat_2 = format_csongmat_2.readFeatures(json_csongmat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csongmat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csongmat_2.addFeatures(features_csongmat_2);
var lyr_csongmat_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csongmat_2, 
                style: style_csongmat_2,
                interactive: true,
    title: 'csongmat<br />\
    <img src="styles/legend/csongmat_2_0.png" /> Csongrad<br />\
    <img src="styles/legend/csongmat_2_1.png" /> Szentes<br />\
    <img src="styles/legend/csongmat_2_2.png" /> Kistelek<br />\
    <img src="styles/legend/csongmat_2_3.png" /> Hodmezovasarhely<br />\
    <img src="styles/legend/csongmat_2_4.png" /> Morahalom<br />\
    <img src="styles/legend/csongmat_2_5.png" /> Szeged<br />\
    <img src="styles/legend/csongmat_2_6.png" /> Mako<br />'
        });
var format_road_3 = new ol.format.GeoJSON();
var features_road_3 = format_road_3.readFeatures(json_road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_3.addFeatures(features_road_3);
var lyr_road_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_road_3, 
                style: style_road_3,
                interactive: true,
    title: 'road<br />\
    <img src="styles/legend/road_3_0.png" /> Primary<br />\
    <img src="styles/legend/road_3_1.png" /> Secondary<br />\
    <img src="styles/legend/road_3_2.png" /> Other<br />'
        });
var format_settlement_4 = new ol.format.GeoJSON();
var features_settlement_4 = format_settlement_4.readFeatures(json_settlement_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_settlement_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_settlement_4.addFeatures(features_settlement_4);
var lyr_settlement_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_settlement_4, 
                style: style_settlement_4,
                interactive: true,
                title: '<img src="styles/legend/settlement_4.png" /> settlement'
            });
var format_county_5 = new ol.format.GeoJSON();
var features_county_5 = format_county_5.readFeatures(json_county_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_county_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_county_5.addFeatures(features_county_5);
var lyr_county_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_county_5, 
                style: style_county_5,
                interactive: true,
                title: '<img src="styles/legend/county_5.png" /> county'
            });

lyr_lake_0.setVisible(true);lyr_river_1.setVisible(true);lyr_csongmat_2.setVisible(true);lyr_road_3.setVisible(true);lyr_settlement_4.setVisible(true);lyr_county_5.setVisible(true);
var layersList = [lyr_lake_0,lyr_river_1,lyr_csongmat_2,lyr_road_3,lyr_settlement_4,lyr_county_5];
lyr_lake_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TO_': 'TO_', 'TO_ID': 'TO_ID', 'BENT': 'BENT', });
lyr_river_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'FOLYO_': 'FOLYO_', 'FOLYO_ID': 'FOLYO_ID', 'BENT': 'BENT', });
lyr_csongmat_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TELHAT_ID': 'TELHAT_ID', 'TELNEV': 'TELNEV', 'KSHKOD': 'KSHKOD', 'TELNAGYSAG': 'TELNAGYSAG', 'KISTERSEG': 'KISTERSEG', 'AGGLO': 'AGGLO', });
lyr_road_3.set('fieldAliases', {'UTAK_': 'UTAK_', 'UTAK_ID': 'UTAK_ID', 'DXF_LAYER': 'DXF_LAYER', 'REND': 'REND', 'FORG': 'FORG', });
lyr_settlement_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'BELTER_': 'BELTER_', 'BELTER_ID': 'BELTER_ID', 'TELNEV': 'TELNEV', });
lyr_county_5.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'MEGYE_': 'MEGYE_', 'MEGYE_ID': 'MEGYE_ID', 'M': 'M', });
lyr_lake_0.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'TO_': '', 'TO_ID': '', 'BENT': '', });
lyr_river_1.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'FOLYO_': '', 'FOLYO_ID': '', 'BENT': '', });
lyr_csongmat_2.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'TELHAT_ID': '', 'TELNEV': '', 'KSHKOD': '', 'TELNAGYSAG': '', 'KISTERSEG': '', 'AGGLO': '', });
lyr_road_3.set('fieldImages', {'UTAK_': '', 'UTAK_ID': '', 'DXF_LAYER': '', 'REND': '', 'FORG': '', });
lyr_settlement_4.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'BELTER_': '', 'BELTER_ID': '', 'TELNEV': '', });
lyr_county_5.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'MEGYE_': '', 'MEGYE_ID': '', 'M': '', });
lyr_lake_0.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'TO_': 'no label', 'TO_ID': 'no label', 'BENT': 'no label', });
lyr_river_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'FOLYO_': 'no label', 'FOLYO_ID': 'no label', 'BENT': 'no label', });
lyr_csongmat_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'TELHAT_ID': 'no label', 'TELNEV': 'no label', 'KSHKOD': 'no label', 'TELNAGYSAG': 'no label', 'KISTERSEG': 'no label', 'AGGLO': 'no label', });
lyr_road_3.set('fieldLabels', {'UTAK_': 'no label', 'UTAK_ID': 'no label', 'DXF_LAYER': 'no label', 'REND': 'no label', 'FORG': 'no label', });
lyr_settlement_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'BELTER_': 'no label', 'BELTER_ID': 'no label', 'TELNEV': 'no label', });
lyr_county_5.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'header label', 'MEGYE_': 'no label', 'MEGYE_ID': 'no label', 'M': 'no label', });
lyr_county_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});