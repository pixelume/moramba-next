export const LoadingSpinner = () => {
  return (
    <div className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center pointer-events-none">
      <div className="h-[50vh] w-[50vh] animate-loader-scale rounded-full border-y-[10px] opacity-50 border-hprimary portrait:h-[50vw] portrait:w-[50vw]" />
    </div>
  )
}
