const birds = [
  {id: '1', name: 'Robin'},
  {id: '2', name: 'Warbler'},
  {name: 'Vulture'},
  {id: '3', name: 'Heron'},
  {id: '4', name: 'Egret'},
  {id: '5', name: 'Eagle'},
  {id: '6', name: 'Swift'},
  {name: 'Owl'},
  {id: '7', name: 'Wren'},
  {id: '8', name: 'Penguin'},
  {id: '9', name: 'Ostrich'},
];


/**
 * Finds a element from the birds array by given ID
 *
 * Logs the name of every bird in the birds array until the
 * bird is found. The found bird's name is not logged.
 *
 * If a bird's id is undefined, the bird's name is not logged.
 *
 * @param {string} id
 * @return {Bird}
 */
export function findBirdByID(id) {
  for (let i = 0; i < birds.length; i++) {
    if (birds[i]['id'] != undefined) {
      if (birds[i]['id'] == id) {
        return birds[i];
      } else {
        if (birds[i]['name'] != undefined) {
          console.log(birds[i]['name']);
        }
      }
    } else {
      continue;
    }
  }
}
