/**
 * This file contains the basic configuration settings for the banana webapp. 
 */
 
define(['settings'],
function (Settings) {
  "use strict";

  return new Settings({

    /**
     * The default solr server and collection.
     * 
     * Banana is designed such that one instance of the webapp can act as a query engine 
     * for multiple instances of Solr and multiple Solr collections. In this file, you can 
     * specify the default Solr server and the collection that stores the data to be 
     * visualized. Each dashboard that you create can (and typically will) override this 
     * setting.
     *
     * Note that the solr server address you specify must be resolvable from the browser
     * i.e., from your users' machine. You probably want to set it to the FQDN and port 
     * number of your Solr host or the proxy that controls access to your Solr host. 
     * By default it is set to localhost:8983, which frequently 
     * works for development and testing, when you are running Solr, Banana and the 
     * browser on one development/testing machine.
     *
     * After configuring this file, we also suggest you edit the solr server and collection 
     * in the default dashboard (app/dashboards/default.json), which is a guided 
     * self-starter for building dashboards. You can later replace the pre-defined 
     * default.json with the dashboard you want your users to see when they first access 
     * your banana web application.
     * @type {String}
     */
    solr: "http://localhost:8983/solr/",
    solr_core: "logstash_logs",

    /**
     * The default Solr index to use for storing objects internal to Banana, such as 
     * stored dashboards. If you have been using a collection named kibana-int 
     * to save your dashboards (the default provided in Banana 1.2 and earlier), then you
     * simply need to replace the string "banana-int" with "kibana-int" and your old 
     * dashboards will be accessible. 
     *
     * This banana-int (or equivalent) collection must be created and available in the 
     * default solr server specified above, which serves as the persistence store for data 
     * internal to banana.
     * @type {String}
     */
    banana_index: "banana-int",

    /**
     * Panel modules available. Panels will only be loaded when they are defined in the
     * dashboard. This list is used to populate the drop-down in the "add panel" interface.
     * @type {Array}
     */
    panel_names: [
      'facet',
      'histogram',
      'map',
      'table',
      'filtering',
      'timepicker',
      'text',
      'hits',
      'column',
      'ticker',
      'bettermap',
      'query',
      'terms',
      'rangeFacet',
      'heatmap',
      'scatterplot',
      'stats',	
      'fullTextSearch',
      'tagcloud',
      'multiseries
      // 'dummy'  // Dummy module for testing
    ]
  });
});
