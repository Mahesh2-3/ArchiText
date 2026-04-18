import React, { useState } from "react";
import { createProject } from "../api/Project";

const CreateProject = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await createProject(formData.title, formData.description);
    setIsLoading(false);
    if (res.success) {
      if (onSuccess) onSuccess(res.data);
      else if (onClose) onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center backdrop-blur-md bg-black/20 p-4 animate-in fade-in duration-300">
      <div className="w-full max-w-md bg-(--color-main) rounded-lg shadow-2xl border-2 border-(--color-secondary) p-6 md:p-8 flex flex-col gap-6 transform transition-all animate-in zoom-in duration-300">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-(--color-last)">
            Create New Project
          </h1>
          {onClose && !isLoading && (
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-(--color-secondary)/20 text-(--color-last) transition-colors cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-(--color-last) opacity-70 ml-1">
              Project Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Modern E-commerce"
              required
              disabled={isLoading}
              className={`w-full p-3 rounded-md border-2 border-(--color-secondary) outline-none focus:border-(--color-normal) focus:ring-4 focus:ring-(--color-secondary)/30 dark:bg-black/20 text-(--text-normal) transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-(--color-last) opacity-70 ml-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the architecture goals..."
              rows={4}
              disabled={isLoading}
              className={`w-full p-3 rounded-md border-2 border-(--color-secondary) outline-none focus:border-(--color-normal) focus:ring-4 focus:ring-(--color-secondary)/30 dark:bg-black/20 text-(--text-normal) transition-all resize-none ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          </div>

          <div className="flex gap-3 mt-2">
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading}
                className={`flex-1 p-3 rounded-md border-2 border-(--color-secondary) text-(--color-last) font-bold transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-(--color-secondary)/10 cursor-pointer'}`}
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className={`flex-2 p-3 rounded-md bg-(--color-last) text-(--color-main) font-bold shadow-lg transition-all flex justify-center items-center gap-2 ${isLoading ? 'opacity-70 cursor-wait' : 'hover:opacity-90 active:scale-95 cursor-pointer'}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-(--color-main)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Create Project"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
