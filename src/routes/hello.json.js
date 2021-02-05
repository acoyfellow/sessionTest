export async function get(res, context) {
  console.log('/hello.json.js GET()', { context });
  return {
    status: 200,
    body: { hello: context.user }
  }
};