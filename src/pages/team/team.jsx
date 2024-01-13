const members = [
  {
    name: "Misha",
    role: "Data Scientist",
    description:
      "Misha developped the front-end interface to interact with the machine learning model, ensuring a seamless user experience. Integrated the model predictions into the web application for practical use.",
    imgUrl: "",
    linkedin: "",
    github: "https://github.com/Mishquad",
    discord: "https://discord.com/channels/1170049656366039153",
  },
  {
    name: "Van",
    role: "Machine Learning Engineer",
    description:
      "Van implemented and fine-tuned machine learning models such as CatBoost, Ridge Regression, KNN, and Linear Regression. Conducted hyperparameter tuning to optimize model performance and enhance prediction accuracy.",
    imgUrl: "https://i.ibb.co/5TVCqp7/IMG-20240114-024949-903.jpg",
    linkedin: "",
    github: "https://github.com/gdnjr5233",
    discord: "https://discord.com/channels/1170049656366039153",
  },
  {
    name: "Renzo",
    role: "Machine Learning Engineer",
    description:
      "Renzo implemented and fine-tuned machine learning models such as CatBoost, Ridge Regression, KNN, and Linear Regression. Conducted hyperparameter tuning to optimize model performance and enhance prediction accuracy.",
    imgUrl: "https://avatars.githubusercontent.com/u/64463241?v=4",
    linkedin: "",
    github: "https://github.com/Renzo-Fu",
    discord: "https://discord.com/channels/1170049656366039153",
  },
  {
    name: "Brice Donald",
    role: "Software Developer / Data Scientist",
    description:
      "He developed the front-end interface to interact with the machine learning model, ensuring a seamless user experience. Integrated the model predictions into the web application for practical use. He also assisted the other technicians in searching for answers in lots of ways.",
    imgUrl: "https://i.ibb.co/NC2rB3M/photo-1.png",
    linkedin: "https://www.linkedin.com/in/brice-abodo/",
    github: "https://github.com/boodscode237",
    discord: "https://discord.com/channels/1170049656366039153",
  },
];
function Team() {
  return (
    <section id="team" class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Building a robust salary prediction model requires a collaborative
            effort, and I appreciate the collective expertise of the team
            involved in this project. The collaboration of four dedicated
            professionals ensured a comprehensive approach to data analysis,
            model selection, and evaluation. The diverse skills and perspectives
            of the team members contributed to the success of the project.
          </p>
        </div>
        <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {members.map((member, index) => (
            <div
              key={index}
              class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={member.imgUrl}
                alt={member.name}
              />
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <span class="text-gray-500 dark:text-gray-400">
                  {member.role}
                </span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>
                <ul class="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href="x"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <svg
                          class="w-[43px] h-[43px] text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="currentColor"
                            d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                          />
                        </svg>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="discord"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <svg
                          class="w-[43px] h-[43px] text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 16"
                        >
                          <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                        </svg>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="linkedin"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <svg
                          class="w-[43px] h-[43px] text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 15"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                            clip-rule="evenodd"
                          />
                          <path d="M3 5.012H0V15h3V5.012Z" />
                        </svg>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="github"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <svg
                          class="w-[43px] h-[43px] text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
