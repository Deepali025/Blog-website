/**
 * BlogCardSkeleton.jsx - Loading Skeleton Component
 * 
 * Displays an animated placeholder while blog data is loading.
 * Mimics the structure of BlogCard to provide visual continuity.
 * 
 * Features:
 * - Shimmer animation effect
 * - Matches BlogCard layout
 * - Responsive to dark mode
 */

function BlogCardSkeleton() {
    return (
        <div className="skeleton-card">
            {/* Skeleton image placeholder */}
            <div className="skeleton-image"></div>

            <div className="skeleton-content">
                {/* Skeleton category badge */}
                <div className="skeleton skeleton-badge"></div>

                {/* Skeleton title */}
                <div className="skeleton skeleton-title"></div>

                {/* Skeleton description lines */}
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text-short"></div>

                {/* Skeleton tags */}
                <div className="skeleton-tags">
                    <div className="skeleton skeleton-tag"></div>
                    <div className="skeleton skeleton-tag"></div>
                    <div className="skeleton skeleton-tag"></div>
                </div>

                {/* Skeleton engagement metrics */}
                <div style={{
                    display: 'flex',
                    gap: '16px',
                    marginBottom: '12px'
                }}>
                    <div className="skeleton" style={{ width: '60px', height: '20px' }}></div>
                    <div className="skeleton" style={{ width: '60px', height: '20px' }}></div>
                </div>

                {/* Skeleton button */}
                <div className="skeleton skeleton-button"></div>
            </div>
        </div>
    );
}

export default BlogCardSkeleton;
