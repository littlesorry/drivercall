Ext.define('dirvercall.view.DriverMap', {
    extend: 'Ext.Container',
    xtype: 'drivermap',
    requires: [
    ],

    config: {
        layout: 'fit',
        items: {
            xtype: 'map',
            useCurrentLocation: true
        }
    },

});
