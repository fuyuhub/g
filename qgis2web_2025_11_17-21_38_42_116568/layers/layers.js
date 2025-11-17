var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_boundary_BacolorPampanga_1 = new ol.format.GeoJSON();
var features_boundary_BacolorPampanga_1 = format_boundary_BacolorPampanga_1.readFeatures(json_boundary_BacolorPampanga_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_BacolorPampanga_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_BacolorPampanga_1.addFeatures(features_boundary_BacolorPampanga_1);
var lyr_boundary_BacolorPampanga_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_BacolorPampanga_1, 
                style: style_boundary_BacolorPampanga_1,
                popuplayertitle: 'boundary_Bacolor, Pampanga',
                interactive: true,
                title: '<img src="styles/legend/boundary_BacolorPampanga_1.png" /> boundary_Bacolor, Pampanga'
            });
var format_boundary_BacolorPampanga_2 = new ol.format.GeoJSON();
var features_boundary_BacolorPampanga_2 = format_boundary_BacolorPampanga_2.readFeatures(json_boundary_BacolorPampanga_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_BacolorPampanga_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_BacolorPampanga_2.addFeatures(features_boundary_BacolorPampanga_2);
var lyr_boundary_BacolorPampanga_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_BacolorPampanga_2, 
                style: style_boundary_BacolorPampanga_2,
                popuplayertitle: 'boundary_Bacolor, Pampanga',
                interactive: true,
                title: '<img src="styles/legend/boundary_BacolorPampanga_2.png" /> boundary_Bacolor, Pampanga'
            });
var format_boundary_BacolorPampanga_3 = new ol.format.GeoJSON();
var features_boundary_BacolorPampanga_3 = format_boundary_BacolorPampanga_3.readFeatures(json_boundary_BacolorPampanga_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_BacolorPampanga_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_BacolorPampanga_3.addFeatures(features_boundary_BacolorPampanga_3);
var lyr_boundary_BacolorPampanga_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_BacolorPampanga_3, 
                style: style_boundary_BacolorPampanga_3,
                popuplayertitle: 'boundary_Bacolor, Pampanga',
                interactive: true,
                title: '<img src="styles/legend/boundary_BacolorPampanga_3.png" /> boundary_Bacolor, Pampanga'
            });
var format_jason_4 = new ol.format.GeoJSON();
var features_jason_4 = format_jason_4.readFeatures(json_jason_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jason_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jason_4.addFeatures(features_jason_4);
var lyr_jason_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jason_4, 
                style: style_jason_4,
                popuplayertitle: 'jason',
                interactive: true,
                title: '<img src="styles/legend/jason_4.png" /> jason'
            });

lyr_OSMStandard_0.setVisible(true);lyr_boundary_BacolorPampanga_1.setVisible(true);lyr_boundary_BacolorPampanga_2.setVisible(true);lyr_boundary_BacolorPampanga_3.setVisible(true);lyr_jason_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_boundary_BacolorPampanga_1,lyr_boundary_BacolorPampanga_2,lyr_boundary_BacolorPampanga_3,lyr_jason_4];
lyr_boundary_BacolorPampanga_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'traffic_sign:backward': 'traffic_sign:backward', 'direction': 'direction', 'traffic_calming': 'traffic_calming', 'mapillary': 'mapillary', 'ford': 'ford', 'tourism': 'tourism', 'information': 'information', 'board_type': 'board_type', 'source:population': 'source:population', 'official_name:tl': 'official_name:tl', 'official_name:pam': 'official_name:pam', 'official_name:ms': 'official_name:ms', 'official_name:es': 'official_name:es', 'official_name:en': 'official_name:en', 'name:zh': 'name:zh', 'name:sv': 'name:sv', 'name:nl': 'name:nl', 'name:ms': 'name:ms', 'name:la': 'name:la', 'name:it': 'name:it', 'name:id': 'name:id', 'name:fr': 'name:fr', 'name:es': 'name:es', 'name:de': 'name:de', 'name:bg': 'name:bg', 'capital': 'capital', 'alt_name:pam': 'alt_name:pam', 'ref': 'ref', 'population:note': 'population:note', 'name:tl': 'name:tl', 'name:ru': 'name:ru', 'name:pam': 'name:pam', 'name:ko': 'name:ko', 'name:ja': 'name:ja', 'name:hu': 'name:hu', 'name:he': 'name:he', 'name:eo': 'name:eo', 'name:en': 'name:en', 'int_ref': 'int_ref', 'ISO3166-2': 'ISO3166-2', 'wikipedia': 'wikipedia', 'wikimedia_commons': 'wikimedia_commons', 'wikidata': 'wikidata', 'website': 'website', 'postal_code': 'postal_code', 'population:date': 'population:date', 'population': 'population', 'place': 'place', 'old_ref': 'old_ref', 'name': 'name', 'is_in': 'is_in', 'admin_type:PH': 'admin_type:PH', 'admin_level': 'admin_level', });
lyr_boundary_BacolorPampanga_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'intermittent': 'intermittent', 'destination:backward': 'destination:backward', 'description': 'description', 'embankment': 'embankment', 'tidal': 'tidal', 'tunnel': 'tunnel', 'bridge': 'bridge', 'layer': 'layer', 'name:tl': 'name:tl', 'noname': 'noname', 'ref': 'ref', 'official_name': 'official_name', 'nat_name': 'nat_name', 'maxspeed': 'maxspeed', 'lit': 'lit', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'lane_markings': 'lane_markings', 'designation': 'designation', 'alt_name': 'alt_name', 'maritime': 'maritime', 'wikidata': 'wikidata', 'boat': 'boat', 'width': 'width', 'survey:name': 'survey:name', 'survey:date': 'survey:date', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', 'motorcycle': 'motorcycle', 'lanes': 'lanes', 'highway': 'highway', 'waterway': 'waterway', 'admin_level': 'admin_level', 'was:waterway': 'was:waterway', });
lyr_boundary_BacolorPampanga_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'website': 'website', 'postal_code': 'postal_code', 'place': 'place', 'is_in': 'is_in', 'admin_type:PH': 'admin_type:PH', 'wikipedia': 'wikipedia', 'wikimedia_commons': 'wikimedia_commons', 'wikidata': 'wikidata', 'type': 'type', 'ref': 'ref', 'population:note': 'population:note', 'population:date': 'population:date', 'population': 'population', 'old_ref': 'old_ref', 'name:tl': 'name:tl', 'name:ru': 'name:ru', 'name:pam': 'name:pam', 'name:ms': 'name:ms', 'name:ko': 'name:ko', 'name:ja': 'name:ja', 'name:hu': 'name:hu', 'name:he': 'name:he', 'name:fr': 'name:fr', 'name:es': 'name:es', 'name:eo': 'name:eo', 'name:en': 'name:en', 'name': 'name', 'int_ref': 'int_ref', 'border_type': 'border_type', 'admin_level': 'admin_level', 'ISO3166-2': 'ISO3166-2', });
lyr_jason_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'website': 'website', 'postal_code': 'postal_code', 'place': 'place', 'is_in': 'is_in', 'admin_type:PH': 'admin_type:PH', 'wikipedia': 'wikipedia', 'wikimedia_commons': 'wikimedia_commons', 'wikidata': 'wikidata', 'type': 'type', 'ref': 'ref', 'population:note': 'population:note', 'population:date': 'population:date', 'population': 'population', 'old_ref': 'old_ref', 'name:tl': 'name:tl', 'name:ru': 'name:ru', 'name:pam': 'name:pam', 'name:ms': 'name:ms', 'name:ko': 'name:ko', 'name:ja': 'name:ja', 'name:hu': 'name:hu', 'name:he': 'name:he', 'name:fr': 'name:fr', 'name:es': 'name:es', 'name:eo': 'name:eo', 'name:en': 'name:en', 'name': 'name', 'int_ref': 'int_ref', 'border_type': 'border_type', 'admin_level': 'admin_level', 'ISO3166-2': 'ISO3166-2', });
lyr_boundary_BacolorPampanga_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'traffic_sign:backward': '', 'direction': '', 'traffic_calming': '', 'mapillary': '', 'ford': '', 'tourism': '', 'information': '', 'board_type': '', 'source:population': '', 'official_name:tl': '', 'official_name:pam': '', 'official_name:ms': '', 'official_name:es': '', 'official_name:en': '', 'name:zh': '', 'name:sv': '', 'name:nl': '', 'name:ms': '', 'name:la': '', 'name:it': '', 'name:id': '', 'name:fr': '', 'name:es': '', 'name:de': '', 'name:bg': '', 'capital': '', 'alt_name:pam': '', 'ref': '', 'population:note': '', 'name:tl': '', 'name:ru': '', 'name:pam': '', 'name:ko': '', 'name:ja': '', 'name:hu': '', 'name:he': '', 'name:eo': '', 'name:en': '', 'int_ref': '', 'ISO3166-2': '', 'wikipedia': '', 'wikimedia_commons': '', 'wikidata': '', 'website': '', 'postal_code': '', 'population:date': '', 'population': '', 'place': '', 'old_ref': '', 'name': '', 'is_in': '', 'admin_type:PH': '', 'admin_level': '', });
lyr_boundary_BacolorPampanga_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'boundary': '', 'intermittent': '', 'destination:backward': '', 'description': '', 'embankment': '', 'tidal': '', 'tunnel': '', 'bridge': '', 'layer': '', 'name:tl': '', 'noname': '', 'ref': '', 'official_name': '', 'nat_name': '', 'maxspeed': '', 'lit': '', 'lanes:forward': '', 'lanes:backward': '', 'lane_markings': '', 'designation': '', 'alt_name': '', 'maritime': '', 'wikidata': '', 'boat': '', 'width': '', 'survey:name': '', 'survey:date': '', 'surface': '', 'oneway': '', 'name': '', 'motorcycle': '', 'lanes': '', 'highway': '', 'waterway': '', 'admin_level': '', 'was:waterway': '', });
lyr_boundary_BacolorPampanga_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'boundary': '', 'website': '', 'postal_code': '', 'place': '', 'is_in': '', 'admin_type:PH': '', 'wikipedia': '', 'wikimedia_commons': '', 'wikidata': '', 'type': '', 'ref': '', 'population:note': '', 'population:date': '', 'population': '', 'old_ref': '', 'name:tl': '', 'name:ru': '', 'name:pam': '', 'name:ms': '', 'name:ko': '', 'name:ja': '', 'name:hu': '', 'name:he': '', 'name:fr': '', 'name:es': '', 'name:eo': '', 'name:en': '', 'name': '', 'int_ref': '', 'border_type': '', 'admin_level': '', 'ISO3166-2': '', });
lyr_jason_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'boundary': '', 'website': '', 'postal_code': '', 'place': '', 'is_in': '', 'admin_type:PH': '', 'wikipedia': '', 'wikimedia_commons': '', 'wikidata': '', 'type': '', 'ref': '', 'population:note': '', 'population:date': '', 'population': '', 'old_ref': '', 'name:tl': '', 'name:ru': '', 'name:pam': '', 'name:ms': '', 'name:ko': '', 'name:ja': '', 'name:hu': '', 'name:he': '', 'name:fr': '', 'name:es': '', 'name:eo': '', 'name:en': '', 'name': '', 'int_ref': '', 'border_type': '', 'admin_level': '', 'ISO3166-2': '', });
lyr_boundary_BacolorPampanga_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'traffic_sign:backward': 'no label', 'direction': 'no label', 'traffic_calming': 'no label', 'mapillary': 'no label', 'ford': 'no label', 'tourism': 'no label', 'information': 'no label', 'board_type': 'no label', 'source:population': 'no label', 'official_name:tl': 'no label', 'official_name:pam': 'no label', 'official_name:ms': 'no label', 'official_name:es': 'no label', 'official_name:en': 'no label', 'name:zh': 'no label', 'name:sv': 'no label', 'name:nl': 'no label', 'name:ms': 'no label', 'name:la': 'no label', 'name:it': 'no label', 'name:id': 'no label', 'name:fr': 'no label', 'name:es': 'no label', 'name:de': 'no label', 'name:bg': 'no label', 'capital': 'no label', 'alt_name:pam': 'no label', 'ref': 'no label', 'population:note': 'no label', 'name:tl': 'no label', 'name:ru': 'no label', 'name:pam': 'no label', 'name:ko': 'no label', 'name:ja': 'no label', 'name:hu': 'no label', 'name:he': 'no label', 'name:eo': 'no label', 'name:en': 'no label', 'int_ref': 'no label', 'ISO3166-2': 'no label', 'wikipedia': 'no label', 'wikimedia_commons': 'no label', 'wikidata': 'no label', 'website': 'no label', 'postal_code': 'no label', 'population:date': 'no label', 'population': 'no label', 'place': 'no label', 'old_ref': 'no label', 'name': 'no label', 'is_in': 'no label', 'admin_type:PH': 'no label', 'admin_level': 'no label', });
lyr_boundary_BacolorPampanga_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'intermittent': 'no label', 'destination:backward': 'no label', 'description': 'no label', 'embankment': 'no label', 'tidal': 'no label', 'tunnel': 'no label', 'bridge': 'no label', 'layer': 'no label', 'name:tl': 'no label', 'noname': 'no label', 'ref': 'no label', 'official_name': 'no label', 'nat_name': 'no label', 'maxspeed': 'no label', 'lit': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'lane_markings': 'no label', 'designation': 'no label', 'alt_name': 'no label', 'maritime': 'no label', 'wikidata': 'no label', 'boat': 'no label', 'width': 'no label', 'survey:name': 'no label', 'survey:date': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name': 'no label', 'motorcycle': 'no label', 'lanes': 'no label', 'highway': 'no label', 'waterway': 'no label', 'admin_level': 'no label', 'was:waterway': 'no label', });
lyr_boundary_BacolorPampanga_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'website': 'no label', 'postal_code': 'no label', 'place': 'no label', 'is_in': 'no label', 'admin_type:PH': 'no label', 'wikipedia': 'no label', 'wikimedia_commons': 'no label', 'wikidata': 'no label', 'type': 'no label', 'ref': 'no label', 'population:note': 'no label', 'population:date': 'no label', 'population': 'no label', 'old_ref': 'no label', 'name:tl': 'no label', 'name:ru': 'no label', 'name:pam': 'no label', 'name:ms': 'no label', 'name:ko': 'no label', 'name:ja': 'no label', 'name:hu': 'no label', 'name:he': 'no label', 'name:fr': 'no label', 'name:es': 'no label', 'name:eo': 'no label', 'name:en': 'no label', 'name': 'no label', 'int_ref': 'no label', 'border_type': 'no label', 'admin_level': 'no label', 'ISO3166-2': 'no label', });
lyr_jason_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'website': 'no label', 'postal_code': 'no label', 'place': 'no label', 'is_in': 'no label', 'admin_type:PH': 'no label', 'wikipedia': 'no label', 'wikimedia_commons': 'no label', 'wikidata': 'no label', 'type': 'no label', 'ref': 'no label', 'population:note': 'no label', 'population:date': 'no label', 'population': 'no label', 'old_ref': 'no label', 'name:tl': 'no label', 'name:ru': 'no label', 'name:pam': 'no label', 'name:ms': 'no label', 'name:ko': 'no label', 'name:ja': 'no label', 'name:hu': 'no label', 'name:he': 'no label', 'name:fr': 'no label', 'name:es': 'no label', 'name:eo': 'no label', 'name:en': 'no label', 'name': 'no label', 'int_ref': 'no label', 'border_type': 'no label', 'admin_level': 'no label', 'ISO3166-2': 'no label', });
lyr_jason_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});