package backend.dto;

import org.springframework.data.util.Pair;

public enum PesoFilter {
    PEQUENA(0, 5), MEDIANA(6, 10), GRANDE(11, Integer.MAX_VALUE);

    Integer min, max;

    PesoFilter(Integer min, Integer max) {
        this.min = min;
        this.max = max;
    }

    public Pair<Integer, Integer> toPair() {
        return Pair.of(min, max);
    }
}
