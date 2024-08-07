
/* Activity 4: Module Pattern 
Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
*/

/* first method to solve this quesiton */

/* class ItemManager {
    constructor(){
        this.items=["apple", "orange"]; //Private array
    }

    addItem(item){
        this.items.push(item);
        console.log(`${item} added.`);
    }

    removeItem(item){
        const index=this.items.indexOf(item);
        if(index >-1){
            this.items.splice(index, 1);
            console.log(`${item} removed.`);
        }else {
            console.log(`${item} not found.`);
        }
    }
    listItems(){
        console.log(`Items:`, this.items);
    }
}

//Usage
const manager =new ItemManager();
manager.addItem("guava");
manager.addItem("watermelon");
manager.listItems();
manager.removeItem();
manager.listItems('Apple');
manager.listItems();
 */
/* Second method to sove the question */

const ItemManager = (function() {
    let items = []; // Private array
  
    return {
      addItem: function(item) {
        items.push(item);
        console.log(`${item} added.`);
      },
      removeItem: function(item) {
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
          console.log(`${item} removed.`);
        } else {
          console.log(`${item} not found.`);
        }
      },
      listItems: function() {
        console.log('Items:', items);
      }
    };
  })();
  
  // Usage
  ItemManager.addItem('Apple');     // Logs 'Apple added.'
  ItemManager.addItem('Banana');    // Logs 'Banana added.'
  ItemManager.listItems();         // Logs 'Items: [ 'Apple', 'Banana' ]'
  ItemManager.removeItem('Apple'); // Logs 'Apple removed.'
  ItemManager.listItems();         // Logs 'Items: [ 'Banana' ]'
  