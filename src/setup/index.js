export async function prepare(headers) {
  return {
    context: {
      user: {
        uid: 'userId123',
        data: 'hello world',
      },
      headers
    }
  }
};
export function getSession(context) {
  let { user = null, headers = {} } = context;
  return {
    user,
    headers
  }
};