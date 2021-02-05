export async function prepare(headers) {
  console.log("setup/index.js prepare() called: -> ", { headers });
  // note: if you depend on headers.cookie to validate sessions: 
  // you'll be confused, like me!
  return {
    context: {
      user: "userId123"
    }
  }
};

export function getSession(context) {
  console.log('getSession', { context });
  let {
    user = null
  } = context || {};
  return {
    user
  }
};