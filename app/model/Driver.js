Ext.define('dirvercall.model.Driver', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'auto' },
            { name: 'photo', type: 'auto' },
            { name: 'location', type: 'auto' }

        ]
    }
});
