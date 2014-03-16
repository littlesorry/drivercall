Ext.define('dirvercall.view.Home', {
    extend: 'Ext.tab.Panel',
    xtype: 'home',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        fullscreen: true,

        items: [
            {
                title: 'List',
                iconCls: 'home',
                layout: 'fit',

                styleHtmlContent: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Available Drivers'
                    }, {
                        xtype: "tracklist",
                    }
                ]
            },
            {
                title: 'Map',
                iconCls: 'action',
                layout: 'fit',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'drivermap'
                    }
                ]
            }
        ]
    }
});
