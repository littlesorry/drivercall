Ext.define('dirvercall.model.Order', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'userId', type: 'int' },
            { name: 'driverId', type: 'int' },
            { name: 'status', type: 'auto' },
            { name: 'createdDate', type: 'date' },
            { name: 'comments', type: 'auto' }

        ]
    }
});
