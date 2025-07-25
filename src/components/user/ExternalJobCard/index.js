export const ExternalJobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
      <img
        src={job.company.logo}
        alt={`${job.company.name} logo`}
        className="w-16 h-16 rounded-full mx-auto"
      />
      <h3 className="text-xl font-semibold text-center mt-4">{job.title}</h3>
      <p className="text-sm text-gray-600 text-center">{job.company.name}</p>
      <p className="text-sm text-gray-500 text-center mt-2">{job.location}</p>
      <p className="text-sm text-gray-400 text-center mt-2">
        Posted on: {new Date(job.postAt).toLocaleDateString()}
      </p>
      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-3 block text-center"
      >
        View Job Posting
      </a>
    </div>
  );
};
