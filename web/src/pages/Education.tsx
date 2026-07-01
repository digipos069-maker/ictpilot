import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Education() {
  useDocumentTitle("Education Center");
  return (
    <div className="pt-32 pb-24 px-8 max-w-container-max mx-auto min-h-[70vh] flex items-center justify-center">
      <h1 className="font-headline-md text-headline-md text-primary">Welcome to Education</h1>
    </div>
  );
}
