def estimate_clothe_size(size: int) -> str:
    match size:
        case size if 36 <= size <= 37:
            result = "PP"
        case size if 38 <= size <= 39:
            result = "P"
        case size if 40 <= size <= 41:
            result = "M"
        case size if 42 <= size <= 43:
            result = "G"
        case size if 44 <= size <= 45:
            result = "GG"
        case size if 46 <= size <= 47:
            result = "XGG"
    return result