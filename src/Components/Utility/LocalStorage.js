

const getStoredJobApplication = () => {
    const storedApplication = localStorage.getItem('job-applications');
    if(storedApplication){
        return JSON.parse(storedApplication)
    }
    return []
}
const saveJobApplication = id => {
    const storedJobApplication = getStoredJobApplication();
    const isAvailable = storedJobApplication.find(jobId => jobId === id);
    if(!isAvailable){
        storedJobApplication.push(id)
    }
    localStorage.setItem('job-applications', JSON.stringify(storedJobApplication))
}

export {getStoredJobApplication, saveJobApplication}