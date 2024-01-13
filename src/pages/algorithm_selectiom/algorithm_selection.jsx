import Catboost from "./OIP.jsx";
import SVGComponent from "./OIP1.jsx";
import LR from "./R4.jsx";
import KNN from "./OIP2.jsx";

const Feature = ({ icon, title, description }) => (
  <div>
    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400">{description}</p>
  </div>
);

function AlgorithmSelection() {
  return (
    <section className="bg-white dark:bg-gray-900" id="algorithm">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            In evaluating the performance of various regression models—{" "}
            <a
              href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html"
              className="font-semibold text-gray-900 underline dark:text-white decoration-red-500"
            >
              Linear Regression
            </a>
            ,
            <a
              href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html"
              className="font-semibold text-gray-900 underline dark:text-white decoration-purple-500"
            >
              Ridge Regression
            </a>{" "}
            ,{" "}
            <a
              href="https://scikit-learn.org/stable/auto_examples/neighbors/plot_regression.html"
              className="font-semibold text-gray-900 underline dark:text-white decoration-blue-500"
            >
              {" "}
              KNN
            </a>{" "}
            , and{" "}
            <a
              href="https://catboost.ai/"
              className="font-semibold text-gray-900 underline dark:text-white decoration-green-500"
            >
              CatBoost—based
            </a>
            on{" "}
            <a
              href="https://catboost.ai/en/docs/concepts/loss-functions-regression#MAPE"
              className="font-semibold text-gray-900 underline dark:text-white decoration-green-500"
            >
              Mean Absolute Percentage Error (MAPE)
            </a>
            , the choice of the best model becomes evident when considering the
            practical implications of minimizing prediction errors.
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            The model selection rationale is as follows:
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <Feature
            icon={<KNN />}
            title="KNN (K-Nearest Neighbors)"
            description="KNN outperforms other models with the lowest MAPE, indicating a more accurate prediction of salaries with an average error of approximately 21.06%. This makes KNN the preferred choice for minimizing percentage errors in salary predictions."
          />

          <Feature
            icon={<Catboost />}
            title="CatBoost"
            description="CatBoost exhibits a competitive MAPE, slightly higher than KNN. While not the best performer, it still offers a reasonable balance between accuracy and computational efficiency, making it a strong contender for scenarios where complexity matters."
          />

          <Feature
            icon={<SVGComponent />}
            title="Ridge Regression"
            description="Ridge Regression follows closely behind CatBoost in MAPE. Its performance suggests that it may be a reliable option for certain use cases, although not as favorable as KNN or CatBoost."
          />

          <Feature
            icon={<LR />}
            title="Linear Regression"
            description="Linear Regression, though providing valuable insights, yields a slightly higher MAPE compared to Ridge Regression. This suggests that the regularization applied by Ridge Regression contributes to better generalization."
          />
        </div>
      </div>
    </section>
  );
}

export default AlgorithmSelection;
