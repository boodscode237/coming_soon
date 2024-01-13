import AlgorithmSelection from "./pages/algorithm_selectiom/algorithm_selection";
import DatasetAndFeatures from "./pages/dataset/dataset_and_features";
import BasDePage from "./pages/footer/footer";
import Head from "./pages/header/header";
import Team from "./pages/team/team";
import TopicAndMetric from "./pages/topic/topic_and_metric";

function App() {
  return (
    <container>
      <header class="sticky top-0 bg-white shadow-md z-50 w-full px-5 py-3 text-white font-semibold">
        <Head />
      </header>
      <div className="w-full h-auto">
        <TopicAndMetric />
      </div>
      <div className="w-full h-auto">
        <DatasetAndFeatures />{" "}
      </div>
      <div className="w-full h-auto">
        <AlgorithmSelection />{" "}
      </div>

      <div className="w-full h-auto">
        <Team />{" "}
      </div>
      <BasDePage />
    </container>
  );
}

export default App;
