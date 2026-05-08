import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 sm:mb-8">
            <span className="text-7xl sm:text-8xl md:text-9xl font-bold text-primary">
              404
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Page Not Found</h1>
          <p className="text-base sm:text-xl text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
