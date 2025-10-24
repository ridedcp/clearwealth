export default function AdPlaceholder({ position }) {
  return (
    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mb-6">
      <div className="text-sm text-gray-500 font-medium">Google AdSense - {position}</div>
      <div className="text-xs text-gray-400 mt-1">300x250 px</div>
    </div>
  )
}
