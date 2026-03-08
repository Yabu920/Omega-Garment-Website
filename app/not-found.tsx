import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Trophy } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <Container className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <Trophy className="text-primary" size={48} />
          </div>
        </div>
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl font-bold text-accent mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Support
          </Button>
        </div>
      </Container>
    </div>
  );
}
