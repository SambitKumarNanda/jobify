const createJob = async (req, res) => {
    res.send('Job Created');
}

const deleteJob = async (req, res) => {
    res.send('Job Deleted');
}

const updateJob = async (req, res) => {
    res.send('Job Updated');
}

const getAllJobs = async (req, res) => {
    res.send('Job List');
}

const showStats = async (req, res) => {
    res.send('Job Showing Stats');
}

export {createJob, deleteJob, getAllJobs, updateJob, showStats}