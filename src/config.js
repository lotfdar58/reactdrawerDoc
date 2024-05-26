export const columnsModel = {
    schedule: { 
        type: 'array',
        columns: [
            { id: 1, name: 'Alice', age: 30, location: 'New York', email: 'alice@example.com', type: 'text' },
            { id: 2, name: 'Bob', age: 25, location: 'San Francisco', email: 'bob@example.com', type: 'text'  },
            { id: 3, name: 'Charlie', age: 35, location: 'Los Angeles', email: 'charlie@example.com', type: 'text'  },
            { id: 4, name: 'David', age: 40, location: 'Chicago', email: 'david@example.com', type: 'text'  },
            { id: 5, name: 'Eve', age: 28, location: 'Boston', email: 'eve@example.com', type: 'text'  }
        ]
    },
    call: {type: 'array', columns: [
        { id: 6, name: 'Frank', age: 32, location: 'Seattle', email: 'frank@example.com', type: 'text'  },
        { id: 7, name: 'Grace', age: 27, location: 'Austin', email: 'grace@example.com', type: 'text'  },
        { id: 8, name: 'Henry', age: 45, location: 'Denver', email: 'henry@example.com', type: 'text'  }
      ]
    },
    series: { type: 'single', field:'serie1'}
};