import React from 'react';
import { Upload, Loader2 } from 'lucide-react';

interface FeaturesProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  file: File | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export function Features({ prompt, setPrompt, file, handleFileChange, handleSubmit, isLoading }: FeaturesProps) {
  return (
    <section id="features" className="py-16 px-8 bg-[#FDFCE8]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Try It Now</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-[200px] p-4 rounded-lg border border-[#003366]/20 focus:outline-none focus:ring-2 focus:ring-[#003366]/50 resize-none mb-4 bg-[#FDFCE8]"
            placeholder="Enter your prompt here..."
          />
          <div className="flex items-center justify-end space-x-4">
            <label className="cursor-pointer bg-[#003366] text-white px-6 py-2 rounded-lg hover:bg-[#003366]/90 transition-colors">
              <input
                type="file"
                className="hidden"
                accept=".jpg,.png,.gif"
                onChange={handleFileChange}
              />
              <div className="flex items-center space-x-2">
                <Upload className="h-4 w-4" />
                <span>{file ? file.name : 'Upload Image'}</span>
              </div>
            </label>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#003366] text-white px-6 py-2 rounded-lg hover:bg-[#003366]/90 transition-colors disabled:opacity-50 flex items-center space-x-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>Try Now</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}