// Handles errors thrown by async functions that express is too simple to catch without having it spelled out
function asyncErrorBoundary(delegate, defaultStatus ) {
    return (request, response, next) => {
      Promise.resolve()
        .then(() => delegate(request, response, next))
        .catch((error) => {
          const { status = defaultStatus, message = error } = error || {};
          next({
            status,
            message,
          });
        });
    };
  }
  
  module.exports = asyncErrorBoundary
  