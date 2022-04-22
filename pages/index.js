import Image from "next/image";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <div>
        <h2>products</h2>
        <ul>
          <li>product1</li>
          <li>product2</li>
          <li>product3</li>
        </ul>
      </div>
    </Layout>
  );
}
