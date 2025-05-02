interface SquareImageProps {
  imageUrl: string;
  altText: string;
  placeholderImageUrl?: string;
}

export default function SquareImage({ imageUrl, altText, placeholderImageUrl }: SquareImageProps) {
  return (
    <div>
      <img
        src={imageUrl || placeholderImageUrl || '/placeholder.svg?height=400&width=400'}
        alt={altText}
        className="w-full h-auto rounded-lg"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            placeholderImageUrl || '/placeholder.svg?height=400&width=400';
        }}
      />
    </div>
  );
}
