package com.singyoursong.utils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CommonUtils {
	public static List<?> pickNRandom(List<?> elements, int n) {
	    List<?> copy = new ArrayList<>(elements);
	    Collections.shuffle(copy);
	    return n > copy.size() ? copy.subList(0, copy.size()) : copy.subList(0, n);
	}
}
