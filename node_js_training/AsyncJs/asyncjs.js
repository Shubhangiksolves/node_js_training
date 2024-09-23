// settimeout ()
function greet(){
    console.log("hello from greet");
}

setTimeout(() => {
    greet();
}, 1000);

//setInterval()
const intervalId =  setInterval(() => {
    console.log("logs Hello at every 1 second");
}, 1000)

setTimeout(() => {
    clearInterval(intervalId);
}, 1000);

//callback
function printName(name){
    console.log("Name: ", name);
}

function hof(callback){
    callback('Shubhi');
}

hof(printName);

// callback hell

function getUser(userId, callback) {
    setTimeout(() => {
        console.log('Fetching user data...');
        callback(null, { userId: userId, name: 'xyz xyz' });
    }, 1000);
}

function getProfile(userId, callback) {
    setTimeout(() => {
        console.log('Fetching profile for user:', userId);
        callback(null, { userId: userId, profile: 'User Profile' });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log('Fetching posts for user:', userId);
        callback(null, [{ postId: 1, content: 'Post 1' }, { postId: 2, content: 'Post 2' }]);
    }, 1000);
}

getUser(1, (err, user) => {
    if (err) {
        console.error('Error fetching user:', err);
        return;
    }
    console.log('User:', user);

    getProfile(user.userId, (err, profile) => {
        if (err) {
            console.error('Error fetching profile:', err);
            return;
        }
        console.log('Profile:', profile);

        getPosts(user.userId, (err, posts) => {
            if (err) {
                console.error('Error fetching posts:', err);
                return;
            }
            console.log('Posts:', posts);
        });
    });
});

// handling callback hell with promise

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching user data...');
            resolve({ userId: userId, name: 'xyz xyz' });
        }, 1000);
    });
}

function getProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching profile for user:', userId);
            resolve({ userId: userId, profile: 'User Profile' });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching posts for user:', userId);
            resolve([{ postId: 1, content: 'Post 1' }, { postId: 2, content: 'Post 2' }]);
        }, 1000);
    });
}

getUser(1)
    .then(user => {
        console.log('User:', user);
        return getProfile(user.userId);
    })
    .then(profile => {
        console.log('Profile:', profile);
        return getPosts(profile.userId);
    })
    .then(posts => {
        console.log('Posts:', posts);
    })
    .catch(err => {
        console.error('Error:', err);
    });
 
// promise methods 

// promise.any()
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 1 resolved'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 2 resolved'), 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 1000);
  });

  Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

//   promise.all
  const promise4 = new Promise((resolve, reject) => {
   resolve('Promise 1 resolve');
  });
  
  const promise5 = new Promise((resolve, reject) => {
   reject('Promise 2 rejected');
  });
  
  const promise6 = new Promise((resolve, reject) => {
   resolve('Promise 3 resolve');
  });

  Promise.all([promise4, promise5, promise6])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

//   promise.race()
  const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 7 rejected'), 1000);
  });
  
  const promise8 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 8 resolved'), 1000);
  });
  
  const promise9 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 9 resolved'), 5000);
  });

  Promise.race([promise7, promise8, promise9])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

//   promise.allSettled()
  const promise10 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 10 rejected"), 1000);
  });

  const promise11 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise 11 resolved"), 1000);
  });

  const promise12 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise 12 resolved"), 1000);
  });

  Promise.allSettled([promise10, promise11, promise12]).then((data) => {
    console.log(data);
  });

  // async await

  async function hello() {
    return "Hello";
  }

console.log(hello());
async function fetchUserData() {
    try {
        const user = await getUser(1);
        console.log('User:', user);

        const profile = await getProfile(user.userId);
        console.log('Profile:', profile);

        const posts = await getPosts(user.userId);
        console.log('Posts:', posts);
    } catch (err) {
        console.error('Error:', err);
    }
}

fetchUserData();
