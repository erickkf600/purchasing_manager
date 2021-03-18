
class ListModel{

    static schema = {
        name: 'List',
        primaryKey: 'id',
        properties: {
            id: 'string',
            product: 'string',
            value: 'string',
            type: 'int',
            checked: 'bool'
        }
    }
}

export default ListModel
