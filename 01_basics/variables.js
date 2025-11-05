const accountId = 49  // not changable
let accountEmail = 'admin@gmail.com' // chanegable
var accountPassword = '12345' // chanegable but scope issue

accountId=3

// ---------------------------------------------------------------------------
// Keyword | Scope          | Re-declare | Update Value | Use Case
// var     | Function Scope | Yes        | Yes          | Older code
// let     | Block Scope    | No         | Yes          | When value changes
// const   | Block Scope    | No         | No           | Fixed values

let accountState // undefined

