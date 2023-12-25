import { getSession, getTokenWorkaround } from "../actions/authActions";

export default async function Session() {
  const session = await getSession();
  const token = await getTokenWorkaround();

  return (
    <div>
      <h1>Session dashboard</h1>
      <div className="border-2 border-blue-500 bg-blue-200">
        <h3 className="text-lg">Session data</h3>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
      <div className="mt-4 border-2 border-blue-500 bg-green-200">
        <h3 className="text-lg">Token data</h3>
        <pre className="overflow-auto">{JSON.stringify(token, null, 2)}</pre>
      </div>
    </div>
  );
}
